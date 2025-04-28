# Contributing to Repx AI

First off, thank you for considering contributing to Repx AI! It's people like you that make Repx AI such a great tool for improving education.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please take a moment to read it before proceeding.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Repx AI. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**

* Check the [issues](https://github.com/Rep-X-AI/repx-ai/issues) to see if the problem has already been reported.
* Perform a cursory search to see if the problem has been reported already.

**How Do I Submit A Good Bug Report?**

Bugs are tracked as [GitHub issues](https://github.com/Rep-X-AI/repx-ai/issues). Create an issue and provide the following information:

* Use a clear and descriptive title for the issue to identify the problem.
* Describe the exact steps which reproduce the problem in as many details as possible.
* Provide specific examples to demonstrate the steps.
* Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
* Explain which behavior you expected to see instead and why.
* Include screenshots if possible.
* If the problem is related to performance or memory, include a CPU profile capture with your report.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Repx AI, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion:**

* Check if the enhancement has already been suggested.
* Determine which repository the enhancement should be suggested in.

**How Do I Submit A Good Enhancement Suggestion?**

Enhancement suggestions are tracked as [GitHub issues](https://github.com/Rep-X-AI/repx-ai/issues). Create an issue and provide the following information:

* Use a clear and descriptive title for the issue to identify the suggestion.
* Provide a step-by-step description of the suggested enhancement in as many details as possible.
* Provide specific examples to demonstrate the steps.
* Describe the current behavior and explain which behavior you expected to see instead and why.
* Include screenshots if applicable.
* Explain why this enhancement would be useful to most Repx AI users.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript and React styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 🚱 `:non-potable_water:` when plugging memory leaks
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 💚 `:green_heart:` when fixing the CI build
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies

### JavaScript Styleguide

* Use ES6 syntax when possible
* Use semicolons
* 2 spaces for indentation
* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible

  ```js
  // Use this:
  export const foo = 'bar';

  // Instead of:
  const foo = 'bar';
  export { foo };
  ```

* Place imports in the following order:
  * Built-in Node modules (such as `path`)
  * External modules (such as `react`, `firebase`)
  * Internal modules (using relative paths)

### React Styleguide

* Use functional components with hooks instead of class components
* Use destructuring for props
* Use the `.jsx` extension for React components
* Component filenames should be PascalCase
* Props naming:
  * Use camelCase for props
  * Use PascalCase for React components
  * Use camelCase for instances

### CSS/Tailwind Styleguide

* Follow the Tailwind CSS naming conventions
* Use utility classes when possible
* Create custom classes only when necessary
* Keep responsive designs in mind

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues that are bugs
* `documentation` - Issues or PRs related to documentation
* `duplicate` - Issues that are duplicates of other issues
* `enhancement` - Issues that are feature requests
* `good first issue` - Issues that are good for newcomers
* `help wanted` - Issues that need assistance
* `invalid` - Issues that are invalid or non-reproducible
* `question` - Issues that are questions
* `wontfix` - Issues that won't be fixed

## Thank You!

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.
