---
layout: page
title: Newsletter Survey
---

<h2>Please answer the following questions to help us better understand the needs of the community:</h2>

<form method="post" id="form">
    <input type="hidden" name="access_key" value="3f914129-5b99-4256-91bc-9996fd047c40">
    <input type="hidden" name="subject" value="Newsletter Survey Response">
    <input type="checkbox" name="botcheck" id="" style="display: none;">
 
  <div class="form-control">
   <label>Do you find this newsletter useful?</label>
   <!-- Input Type Radio Button -->
   <label>
       <input class="radio" type="radio" id="useful-1" name="useful" value="yes" checked="checked">Yes
   </label>
   <label>
       <input class="radio" type="radio" id="useful-2" name="useful" value="no">No
   </label>
   <label>
       <input class="radio" type="radio" id="useful-3" name="useful" value="somewhat">Somewhat
   </label>
   <br>
   <label>Would you be interested in contributing content for future issues?</label>
   <label>
       <input class="radio" type="radio" id="content-1" name="content" value="yes" checked="checked">Yes
   </label>
   <label>
       <input class="radio" type="radio" id="content-2" name="content" value="no">No
   </label>
  </div>

  <br>
  <button class="btn btn-accent btn-lg block w-full cursor-pointer" type="submit">Submit Feedback!</button>
  <div id="result"></div>
</form>
