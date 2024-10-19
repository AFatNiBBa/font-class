
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=regular h4}
 * @preview ![h4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgNjQuMjE5QzYwMi43NSA2NC4yMTkgNTkyIDc0Ljk2OSA1OTIgODguMjE5VjI1Nkg0MjQuNzVMNDU1LjU3OCA5Mi42NTZDNDU4LjA0NyA3OS42NTYgNDQ5LjQ4NCA2Ny4wOTQgNDM2LjQ1MyA2NC42MjVDNDIzLjQ2OSA2Mi4yMTkgNDEwLjg3NSA3MC43NSA0MDguNDIyIDgzLjc4MUwzNzIuMjE5IDI3NS41NjJDMzcwLjg5MSAyODIuNTYyIDM3Mi43NjYgMjg5LjgxMiAzNzcuMzEyIDI5NS4zMTJDMzgxLjg3NSAzMDAuODEyIDM4OC42NTYgMzA0IDM5NS43OTcgMzA0SDU5MlY0MjQuMjE5QzU5MiA0MzcuNDY5IDYwMi43NSA0NDguMjE5IDYxNiA0NDguMjE5UzY0MCA0MzcuNDY5IDY0MCA0MjQuMjE5Vjg4LjIxOUM2NDAgNzQuOTY5IDYyOS4yNSA2NC4yMTkgNjE2IDY0LjIxOVpNMjk2IDY0QzI4Mi43NSA2NCAyNzIgNzQuNzUgMjcyIDg4VjIyNEg0OFY4OEM0OCA3NC43NSAzNy4yNSA2NCAyNCA2NFMwIDc0Ljc1IDAgODhWNDI0QzAgNDM3LjI1IDEwLjc1IDQ0OCAyNCA0NDhTNDggNDM3LjI1IDQ4IDQyNFYyNzJIMjcyVjQyNEMyNzIgNDM3LjI1IDI4Mi43NSA0NDggMjk2IDQ0OFMzMjAgNDM3LjI1IDMyMCA0MjRWODhDMzIwIDc0Ljc1IDMwOS4yNSA2NCAyOTYgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function H4(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 64.219C602.75 64.219 592 74.969 592 88.219V256H424.75L455.578 92.656C458.047 79.656 449.484 67.094 436.453 64.625C423.469 62.219 410.875 70.75 408.422 83.781L372.219 275.562C370.891 282.562 372.766 289.812 377.312 295.312C381.875 300.812 388.656 304 395.797 304H592V424.219C592 437.469 602.75 448.219 616 448.219S640 437.469 640 424.219V88.219C640 74.969 629.25 64.219 616 64.219ZM296 64C282.75 64 272 74.75 272 88V224H48V88C48 74.75 37.25 64 24 64S0 74.75 0 88V424C0 437.25 10.75 448 24 448S48 437.25 48 424V272H272V424C272 437.25 282.75 448 296 448S320 437.25 320 424V88C320 74.75 309.25 64 296 64Z" />
        </Icon>
    </>
}