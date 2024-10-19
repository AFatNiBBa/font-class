
import { Icon } from "../../index";

/**
 * A component that renders the `y-combinator` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/y-combinator?s=brands y-combinator}
 * @preview ![y-combinator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJ2NDQ4SDBWMzJoNDQ4ek0yMzYgMjg3LjVMMzEzLjUgMTQyaC0zMi43TDIzNSAyMzNjLTQuNyA5LjMtOSAxOC4zLTEyLjggMjYuOEwyMTAgMjMzbC00NS4yLTkxaC0zNWw3Ni43IDE0My44djk0LjVIMjM2di05Mi44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const YCombinator: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32v448H0V32h448zM236 287.5L313.5 142h-32.7L235 233c-4.7 9.3-9 18.3-12.8 26.8L210 233l-45.2-91h-35l76.7 143.8v94.5H236v-92.8z" />
    </Icon>
);

export default YCombinator;