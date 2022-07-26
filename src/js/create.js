

export const createTweetPage = `<div id="modifyItem">
      <h1 id="add-tweet-header">Add tweet</h1>
      <form id="addForm">
      <textarea id="input-text" rows="5" cols="33" maxlength="140"></textarea>
      <div class="formButtons">
        <button id="cancelModification" onclick='location.reload()' type="button">Cancel</button>
        <button id="saveModifiedItem" type="submit">Save Changes</button>
      </div>
      </form>
    </div>`;

export const likedTweets = `<div id="liked-tweets-wrapper">
      <h1>Liked Tweets</h1>
      <button type="button" id="back-button">&#129044;</button>
      <ul id="liked-list">
              </ul>
    </div>`;

export const editTweet = `<form id="editTwetWrapper">
			<h1 id="add-tweet-header">Edit tweet</h1>
			<textarea id="input-text"></textarea>
			<div class="formButtons">
				<button id="cancelModification" onClick = 'goBack()'  type="button">Go Back</button>
				<button id="saveModifiedItem" type="submit">Save Changes</button>
			</div>
		</form>`;