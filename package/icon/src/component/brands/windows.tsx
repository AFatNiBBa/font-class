
import { Icon } from "../../index";

/**
 * A component that renders the `windows` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windows?s=brands windows}
 * @preview ![windows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5My43bDE4My42LTI1LjN2MTc3LjRIMFY5My43em0wIDMyNC42bDE4My42IDI1LjNWMjY4LjRIMHYxNDkuOXptMjAzLjggMjhMNDQ4IDQ4MFYyNjguNEgyMDMuOHYxNzcuOXptMC0zODAuNnYxODAuMUg0NDhWMzJMMjAzLjggNjUuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Windows: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
    </Icon>
);

export default Windows;