
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `autoprefixer` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/autoprefixer?s=brands autoprefixer}
 * @preview ![autoprefixer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguNCAxNmwtMTYxIDQ4MGg3Ny41bDI1LjQtODEuNGgxMTkuNUw0MDUgNDk2aDc3LjVMMzE4LjQgMTZ6bS00MC4zIDM0MS45bDQxLjItMTMwLjRoMS41bDQwLjkgMTMwLjRoLTgzLjZ6TTY0MCA0MDVsLTEwLTMxLjRMNDYyLjEgMzU4bDE5LjQgNTYuNUw2NDAgNDA1em0tNDYyLjEtNDdMMTAgMzczLjcgMCA0MDVsMTU4LjUgOS40IDE5LjQtNTYuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Autoprefixer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M318.4 16l-161 480h77.5l25.4-81.4h119.5L405 496h77.5L318.4 16zm-40.3 341.9l41.2-130.4h1.5l40.9 130.4h-83.6zM640 405l-10-31.4L462.1 358l19.4 56.5L640 405zm-462.1-47L10 373.7 0 405l158.5 9.4 19.4-56.4z" />
        </Icon>
    </>
}