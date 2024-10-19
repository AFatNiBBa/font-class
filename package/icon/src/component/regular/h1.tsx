
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `h1` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=regular h1}
 * @preview ![h1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgNjRDMjgyLjc1IDY0IDI3MiA3NC43NSAyNzIgODhWMjI0SDQ4Vjg4QzQ4IDc0Ljc1IDM3LjI1IDY0IDI0IDY0UzAgNzQuNzUgMCA4OFY0MjRDMCA0MzcuMjUgMTAuNzUgNDQ4IDI0IDQ0OFM0OCA0MzcuMjUgNDggNDI0VjI3MkgyNzJWNDI0QzI3MiA0MzcuMjUgMjgyLjc1IDQ0OCAyOTYgNDQ4UzMyMCA0MzcuMjUgMzIwIDQyNFY4OEMzMjAgNzQuNzUgMzA5LjI1IDY0IDI5NiA2NFpNNTUyIDQwMC4wMDJINTA0Vjg4LjAyMUM1MDQgNzkuMTggNDk5LjEyNSA3MS4wNTUgNDkxLjMxMiA2Ni44NjdDNDgzLjUgNjIuNjQ4IDQ3NCA2My4xMTcgNDY2LjY4OCA2OC4wNTVMMzk0LjY4OCAxMTYuMDUxQzM4My42NTYgMTIzLjM5NSAzODAuNjg4IDEzOC4zMDEgMzg4LjAzMSAxNDkuMzNDMzk1LjQwNiAxNjAuMzYxIDQxMC4yNSAxNjMuMjk5IDQyMS4zMTMgMTU1Ljk4Nkw0NTYgMTMyLjg2M1Y0MDAuMDAySDQwOEMzOTQuNzUgNDAwLjAwMiAzODQgNDEwLjc1MiAzODQgNDI0LjAwMkMzODQgNDM3LjI1IDM5NC43NSA0NDggNDA4IDQ0OEg1NTJDNTY1LjI1IDQ0OCA1NzYgNDM3LjI1IDU3NiA0MjQuMDAyQzU3NiA0MTAuNzUyIDU2NS4yNSA0MDAuMDAyIDU1MiA0MDAuMDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function H1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M296 64C282.75 64 272 74.75 272 88V224H48V88C48 74.75 37.25 64 24 64S0 74.75 0 88V424C0 437.25 10.75 448 24 448S48 437.25 48 424V272H272V424C272 437.25 282.75 448 296 448S320 437.25 320 424V88C320 74.75 309.25 64 296 64ZM552 400.002H504V88.021C504 79.18 499.125 71.055 491.312 66.867C483.5 62.648 474 63.117 466.688 68.055L394.688 116.051C383.656 123.395 380.688 138.301 388.031 149.33C395.406 160.361 410.25 163.299 421.313 155.986L456 132.863V400.002H408C394.75 400.002 384 410.752 384 424.002C384 437.25 394.75 448 408 448H552C565.25 448 576 437.25 576 424.002C576 410.752 565.25 400.002 552 400.002Z" />
        </Icon>
    </>
}