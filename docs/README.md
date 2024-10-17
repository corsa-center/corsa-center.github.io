# CORSA Website Documentation

### Running the site locally
1. Open a terminal and clone the CORSA root repository
1. Navigate to the docs folder – `cd docs`
1. Run the command `bundle exec jekyll serve`
    * You may need to run `bundle install && bundle update` if this step fails. Once that is done, repeat step 3.

### Editing

#### Homepage Content
The homepage content all lives in `index.html`. It is built so that the user only needs to add content in the frontmatter and all the html/css is just handled for them (except when they need to input a link). If the actual code needs to be edited for the homepage you may find the html/css in `/docs/_includes/home-sections` directory, split up into a separate file for each section.

**Note:** The website has been built using [Tailwind CSS](https://tailwindcss.com/docs/installation) for ease of building, should you need to make any changes to the code.
    * Also note, that we are using only the CDN approach for installing Tailwind in order to avoid huge build processes and whatnot.

#### Theme Colors
Included is a script that generates hover, focus and content colors based on the hex calues you input into the CSS. If you need to change the colors of the website, navigate to the `custom-styles.html` file located in `/docs/_includes`. At the top you will see 3 hex values that you can input for primary, secondary and accent colors.

#### Navigation
If you need to add or remove a section from the homepage, you may want to edit the navigation to reflect that (since the navigation links just jump you to the different homepage sections). The navigation file is located at `/docs/_includes/site/navigation.html`.
