Please read through these instructions in full before beginning the exercise.
Ensure to complete each task IN ORDER
Some steps will have multiple requirements.

Refer to result.png to see final result.

1. Update the css to match result.png (don't worry about colours or exact spacing. No need to measure exactly)

   - Set font to any san serif font

   - Center the content in the middle of the window, verticaly and horizontally

2. The form inputs should be controlled components
   <!-- useState & onChange -->

   - The name field should be required and the email valid (use builtin browser validation )
   <!-- Form - onSubmit should validate fields -->

   - Clicking each label should focus the respective input field
   <!-- label htmlFor, check MDN syntax -->

3. On submit add the resulting user to an array called profileData
   <!-- handleSubmit update profileData -->

   reset the form
      <!-- clear states to empty strings -->

4. List all created users beneath the form.
<!-- another component, map profileData, need to pass props down (prop drilling) -->

5. Clicking a user should POST an JSON object with the user's name and email to 'https://jsonplaceholder.typicode.com/posts'.

<!-- fetch POST to endpoint -->

- add the ID from the response to the user list

<!-- handle response we get from the back -->

You are welcome to reference MDN (or similar) for documentation:
https://developer.mozilla.org/en-US/docs/Web
