
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `split` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=light split}
 * @preview ![split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMzEyIDM3Mi42ODhDNTEzLjU2MiAzNzguOTM4IDUxMy41NjIgMzg5LjA2MyA1MDcuMzEyIDM5NS4zMTJMNDI3LjMxMiA0NzUuMzEyQzQyNC4xODggNDc4LjQzOCA0MjAuMDk0IDQ4MCA0MTYgNDgwUzQwNy44MTIgNDc4LjQzOCA0MDQuNjg4IDQ3NS4zMTJDMzk4LjQzOCA0NjkuMDYyIDM5OC40MzggNDU4LjkzNyA0MDQuNjg4IDQ1Mi42ODhMNDU3LjM3NSA0MDBIMzMzLjI1QzMyMC42MjUgNDAwIDMwOC4yNSAzOTQuODc1IDI5OS4zMTMgMzg1LjkzOEwxODUuMzc1IDI3MkgyNEMxNS4xNTYgMjcyIDggMjY0Ljg0NCA4IDI1NlMxNS4xNTYgMjQwIDI0IDI0MEgxODUuMzc1TDI5OS4zMTMgMTI2LjA2MkMzMDguMjUgMTE3LjEyNSAzMjAuNjI1IDExMiAzMzMuMjUgMTEySDQ1Ny4zNzVMNDA0LjY4NyA1OS4zMTJDMzk4LjQzNyA1My4wNjIgMzk4LjQzNyA0Mi45MzcgNDA0LjY4NyAzNi42ODhTNDIxLjA2MiAzMC40MzggNDI3LjMxMiAzNi42ODhMNTA3LjMxMiAxMTYuNjg4QzUxMy41NjIgMTIyLjkzOCA1MTMuNTYyIDEzMy4wNjMgNTA3LjMxMiAxMzkuMzEyTDQyNy4zMTIgMjE5LjMxMkM0MjQuMTg4IDIyMi40MzggNDIwLjA5NCAyMjQgNDE2IDIyNFM0MDcuODEyIDIyMi40MzggNDA0LjY4OCAyMTkuMzEyQzM5OC40MzggMjEzLjA2MiAzOTguNDM4IDIwMi45MzcgNDA0LjY4OCAxOTYuNjg4TDQ1Ny4zNzUgMTQ0SDMzMy4yNUMzMjkuMDMxIDE0NCAzMjQuOTA2IDE0NS43MTkgMzIxLjkzOCAxNDguNjg4TDIxNC42MjUgMjU2TDMyMS45MzcgMzYzLjMxMkMzMjQuOTA2IDM2Ni4yODEgMzI5LjAzMSAzNjggMzMzLjI1IDM2OEg0NTcuMzc1TDQwNC42ODcgMzE1LjMxMkMzOTguNDM3IDMwOS4wNjIgMzk4LjQzNyAyOTguOTM3IDQwNC42ODcgMjkyLjY4OFM0MjEuMDYyIDI4Ni40MzggNDI3LjMxMiAyOTIuNjg4TDUwNy4zMTIgMzcyLjY4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Split(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.312 372.688C513.562 378.938 513.562 389.063 507.312 395.312L427.312 475.312C424.188 478.438 420.094 480 416 480S407.812 478.438 404.688 475.312C398.438 469.062 398.438 458.937 404.688 452.688L457.375 400H333.25C320.625 400 308.25 394.875 299.313 385.938L185.375 272H24C15.156 272 8 264.844 8 256S15.156 240 24 240H185.375L299.313 126.062C308.25 117.125 320.625 112 333.25 112H457.375L404.687 59.312C398.437 53.062 398.437 42.937 404.687 36.688S421.062 30.438 427.312 36.688L507.312 116.688C513.562 122.938 513.562 133.063 507.312 139.312L427.312 219.312C424.188 222.438 420.094 224 416 224S407.812 222.438 404.688 219.312C398.438 213.062 398.438 202.937 404.688 196.688L457.375 144H333.25C329.031 144 324.906 145.719 321.938 148.688L214.625 256L321.937 363.312C324.906 366.281 329.031 368 333.25 368H457.375L404.687 315.312C398.437 309.062 398.437 298.937 404.687 292.688S421.062 286.438 427.312 292.688L507.312 372.688Z" />
        </Icon>
    </>
}