---
layout: page
title: Newsletter Survey
---

<h2>Please answer the following questions to help us better understand the needs of the community:</h2>
<p>
<form method="post" id="form">
    <input type="hidden" name="access_key" value="3f914129-5b99-4256-91bc-9996fd047c40">
    <input type="hidden" name="subject" value="Newsletter Survey Response">
    <input type="checkbox" name="botcheck" id="" style="display: none;">
 
  <div class="flex flex-col gap-3">
   <!-- Input Type Radio Button -->
   <div class="flex">
       <div class="flex items-center me-4">Do you find this newsletter useful?</div>
       <div class="flex items-center me-4">
           <input class="w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="useful-1" name="useful" value="yes" checked="checked">
           <label for="useful-1" class="ms-2 text-gray-900 dark:text-gray-300">Yes</label>
       </div>
       <div class="flex items-center me-4">
           <input class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="useful-2" name="useful" value="no">
            <label for="useful-2" class="ms-2 text-gray-900 dark:text-gray-300">No</label>
       </div>
       <div class="flex items-center me-4">
           <input class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="useful-3" name="useful" value="somewhat">
           <label for="useful-3" class="ms-2 text-gray-900 dark:text-gray-300">Somewhat</label>
       </div>
   </div>
   
   <div class="flex">
       <div class="flex items-center me-4">Would you be interested in contributing content for future issues?</div>
       <div class="flex items-center me-4">
           <input class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="content-1" name="content" value="yes" checked="checked">
            <label for="content-1" class="ms-2 text-gray-900 dark:text-gray-300">Yes</label>
       </div>
       <div class="flex items-center me-4">
           <input class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="content-2" name="content" value="no">
           <label for="content-2" class="ms-2 text-gray-900 dark:text-gray-300">No</label>
       </div>
   </div>


  <button class="btn btn-accent btn-lg block w-full cursor-pointer" type="submit">Submit Response!</button>
  <div id="result"></div>
    </div>
</form>
