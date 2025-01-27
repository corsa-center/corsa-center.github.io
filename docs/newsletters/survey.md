---
layout: page
title: Newsletter Survey
---

Please answer the following questions to help us better understand the needs of the community:

<form method="post" id="form">
    <input type="hidden" name="access_key" value="3f914129-5b99-4256-91bc-9996fd047c40">
    <input type="hidden" name="subject" value="Newsletter Survey Response">
    <input type="checkbox" name="botcheck" id="" style="display: none;">
 
  <div class="form-control">
   <label>Do you find this newsletter useful?</label>
   <!-- Input Type Radio Button -->
   <label>
       <input type="radio" id="useful-1" name="useful" value="yes">Yes
   </label>
   <label>
       <input type="radio" id="useful-2" name="useful" value="no">No
   </label>
   <label>
       <input type="radio" id="useful-3" name="useful" value="somewhat">Somewhat
   </label>
   <br>
   <label>Would you be interested in contributing content for future issues?</label>
   <label>
       <input type="radio" id="content-1" name="content" value="yes">Yes
   </label>
   <label>
       <input type="radio" id="content-2" name="content" value="no">No
   </label>
  </div>

  <br>
  <button class="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit Feedback!</button>
  <div id="result"></div>
</form>
