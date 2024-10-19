
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-open-cover` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=regular book-open-cover}
 * @preview ![book-open-cover](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDAuMjM4IDMyLjk2OUw1OTIgMzUuMDMxVjQwMy4xNTZMMzIwIDQ2My42MDlMNDggNDAzLjE1NlYzNS4wMzFMMzkuNzYyIDMyLjk2OUMxOS41NjQgMjcuOTIyIDAgNDMuMTk1IDAgNjQuMDEyVjQxNkMwIDQzMSAxMC40MTggNDQzLjk4NCAyNS4wNTkgNDQ3LjI0MkwzMTMuMDU5IDUxMS4yMzhDMzE3LjYzMSA1MTIuMjU0IDMyMi4zNjkgNTEyLjI1NCAzMjYuOTQxIDUxMS4yMzhMNjE0Ljk0MSA0NDcuMjQyQzYyOS41ODIgNDQzLjk4NCA2NDAgNDMxIDY0MCA0MTZWNjQuMDEyQzY0MCA0My4xOTUgNjIwLjQzNiAyNy45MjIgNjAwLjIzOCAzMi45NjlaTTk3Ljk2OSAzNzUuMjE5TDMxMy45NjkgNDMxLjIxOUMzMTUuOTM4IDQzMS43NSAzMTcuOTY5IDQzMiAzMjAgNDMyUzMyNC4wNjIgNDMxLjc1IDMyNi4wMzEgNDMxLjIxOUw1NDIuMDMxIDM3NS4yMTlDNTUyLjU5NCAzNzIuNSA1NjAgMzYyLjkzOCA1NjAgMzUyVjI0QzU2MCAxNi44NzUgNTU2Ljg0NCAxMC4wOTQgNTUxLjM0NCA1LjU2MkM1NDUuODQ0IDEgNTM4LjY4OCAtMC45MDYgNTMxLjYyNSAwLjQwNkwzMjAgMzkuNTk0TDEwOC4zNzUgMC40MDZDMTAxLjM0NCAtMC45MDYgOTQuMTU2IDEgODguNjU2IDUuNTYyQzgzLjE1NiAxMC4wOTQgODAgMTYuODc1IDgwIDI0VjM1MkM4MCAzNjIuOTM4IDg3LjQwNiAzNzIuNSA5Ny45NjkgMzc1LjIxOVpNMzQ0IDgzLjk2MUw1MTIgNTIuODQ0VjMzMy40MzhMMzQ0IDM3Ni45OTZWODMuOTYxWk0xMjggNTIuODQ0TDI5NiA4My45NjFWMzc2Ljk5NkwxMjggMzMzLjQzOFY1Mi44NDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BookOpenCover(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M600.238 32.969L592 35.031V403.156L320 463.609L48 403.156V35.031L39.762 32.969C19.564 27.922 0 43.195 0 64.012V416C0 431 10.418 443.984 25.059 447.242L313.059 511.238C317.631 512.254 322.369 512.254 326.941 511.238L614.941 447.242C629.582 443.984 640 431 640 416V64.012C640 43.195 620.436 27.922 600.238 32.969ZM97.969 375.219L313.969 431.219C315.938 431.75 317.969 432 320 432S324.062 431.75 326.031 431.219L542.031 375.219C552.594 372.5 560 362.938 560 352V24C560 16.875 556.844 10.094 551.344 5.562C545.844 1 538.688 -0.906 531.625 0.406L320 39.594L108.375 0.406C101.344 -0.906 94.156 1 88.656 5.562C83.156 10.094 80 16.875 80 24V352C80 362.938 87.406 372.5 97.969 375.219ZM344 83.961L512 52.844V333.438L344 376.996V83.961ZM128 52.844L296 83.961V376.996L128 333.438V52.844Z" />
        </Icon>
    </>
}