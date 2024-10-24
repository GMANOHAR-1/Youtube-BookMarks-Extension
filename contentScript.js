(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    let currentVideoBookmarks = [];
  
    const fetchBookmarks = () => {
        return new Promise((resolve) => {
          try {
            chrome.storage.local.get([currentVideo], (obj) => {
              // Check if currentVideo exists in the object
              if (chrome.runtime.lastError) {
                console.error('Error fetching bookmarks:', chrome.runtime.lastError);
                resolve([]); // Resolve with an empty array in case of an error
              } else {
                resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
              }
            });
          } catch (error) {
            console.error('Unexpected error:', error);
            resolve([]); // Resolve with an empty array in case of a catch error
          }
        });
      };
      
  
    const addNewBookmarkEventHandler = async () => {
        const currentTime = youtubePlayer.currentTime;
        const newBookmark = {
          time: currentTime,
          desc: "Bookmark at " + getTime(currentTime),
        };
      
        console.log(newBookmark);
        currentVideoBookmarks = await fetchBookmarks();
        console.log(currentVideoBookmarks);
      
        // Create a promise wrapper around chrome.storage.sync.set
        const saveToStorage = (data) => {
          return new Promise((resolve, reject) => {
            chrome.storage.local.set(data, () => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                resolve();
              }
            });
          });
        };
      
        try {
          await saveToStorage({
            [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time)),
          });
          console.log('Bookmark saved successfully');
        } catch (error) {
          console.error('Error saving bookmark:', error);
        }
      };
      
  
    const newVideoLoaded = async () => {
      const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
  
      currentVideoBookmarks = await fetchBookmarks();
  
      if (!bookmarkBtnExists) {
        const bookmarkBtn = document.createElement("img");
  
        bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
        bookmarkBtn.className = "ytp-button " + "bookmark-btn";
        bookmarkBtn.title = "Click to bookmark current timestamp";
  
        youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
        youtubePlayer = document.getElementsByClassName("video-stream")[0];
  
        youtubeLeftControls.appendChild(bookmarkBtn);
        bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
      }
    };
  
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type, value, videoId } = obj;
  
      if (type === "NEW") {
        currentVideo = videoId;
        newVideoLoaded();
      } else if (type === "PLAY") {
        youtubePlayer.currentTime = value;
      } else if (type === "DELETE") {
        currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
        chrome.storage.local.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });
  
        response(currentVideoBookmarks);
      }
    });
  
    const checkContext = () => {
      if (!document || !document.body) {
        console.error("Context invalidated: reinitializing...");
        return false;
      }
      return true;
    };
  
    newVideoLoaded();
  })();
  
  const getTime = (t) => {
    const date = new Date(0);
    date.setSeconds(t);
  
    return date.toISOString().substr(11, 8);
  };
  