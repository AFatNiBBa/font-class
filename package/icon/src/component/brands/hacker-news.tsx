
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hacker-news` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hacker-news?s=brands hacker-news}
 * @preview ![hacker-news](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMydjQ0OGg0NDhWMzJIMHptMjEuMiAxOTcuMkgyMWMuMS0uMS4yLS4zLjMtLjQgMCAuMSAwIC4zLS4xLjR6bTIxOCA1My45VjM4NGgtMzEuNFYyODEuM0wxMjggMTI4aDM3LjNjNTIuNSA5OC4zIDQ5LjIgMTAxLjIgNTkuMyAxMjUuNiAxMi4zLTI3IDUuOC0yNC40IDYwLjYtMTI1LjZIMzIwbC04MC44IDE1NS4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HackerNews(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z" />
        </Icon>
    </>
}