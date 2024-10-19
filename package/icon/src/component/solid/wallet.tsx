
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=solid wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTI4SDgwQzcxLjEyNSAxMjggNjQgMTIwLjg3NSA2NCAxMTJTNzEuMTI1IDk2IDgwIDk2SDQ4MFY4MEM0ODAgNTMuNDkyIDQ1OC41MSAzMiA0MzIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDQgNTEyIDQxNlYxOTJDNTEyIDE1Ni42NTIgNDgzLjM0NiAxMjggNDQ4IDEyOFpNNDE2IDMzNkMzOTguMzc1IDMzNiAzODQgMzIxLjYyNSAzODQgMzA0UzM5OC4zNzUgMjcyIDQxNiAyNzJTNDQ4IDI4Ni4zNzUgNDQ4IDMwNFM0MzMuNjI1IDMzNiA0MTYgMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Wallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 128H80C71.125 128 64 120.875 64 112S71.125 96 80 96H480V80C480 53.492 458.51 32 432 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V192C512 156.652 483.346 128 448 128ZM416 336C398.375 336 384 321.625 384 304S398.375 272 416 272S448 286.375 448 304S433.625 336 416 336Z" />
        </Icon>
    </>
}