
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shapes` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=solid shapes}
 * @preview ![shapes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjU2QzU3LjI1IDI1NiAwIDMxMy4yNSAwIDM4NFM1Ny4yNSA1MTIgMTI4IDUxMlMyNTYgNDU0Ljc1IDI1NiAzODRTMTk4Ljc1IDI1NiAxMjggMjU2Wk0xOTMuMDEgMjI0SDM4Mi45OTZDNDA4LjMyOCAyMjQgNDI0LjIxNyAxOTcuMzEyIDQxMS41NTEgMTc1Ljk4NEwzMTYuNTU3IDE1Ljk2OUMzMTAuNTU3IDYuMTI1IDI5OS42NyAwIDI4OC4wMDQgMFMyNjUuNDQ5IDYuMTI1IDI1OS40NDkgMTUuOTY5TDE2NC40NTUgMTc1Ljk4NEMxNTEuNzg5IDE5Ny4zMTIgMTY3LjY3OCAyMjQgMTkzLjAxIDIyNFpNNDgwIDI3MkgzMjBDMzAyLjM3NSAyNzIgMjg4IDI4Ni4zNzUgMjg4IDMwNFY0NjRDMjg4IDQ4MS42MjUgMzAyLjM3NSA0OTYgMzIwIDQ5Nkg0ODBDNDk3LjYyNSA0OTYgNTEyIDQ4MS42MjUgNTEyIDQ2NFYzMDRDNTEyIDI4Ni4zNzUgNDk3LjYyNSAyNzIgNDgwIDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Shapes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 256C57.25 256 0 313.25 0 384S57.25 512 128 512S256 454.75 256 384S198.75 256 128 256ZM193.01 224H382.996C408.328 224 424.217 197.312 411.551 175.984L316.557 15.969C310.557 6.125 299.67 0 288.004 0S265.449 6.125 259.449 15.969L164.455 175.984C151.789 197.312 167.678 224 193.01 224ZM480 272H320C302.375 272 288 286.375 288 304V464C288 481.625 302.375 496 320 496H480C497.625 496 512 481.625 512 464V304C512 286.375 497.625 272 480 272Z" />
        </Icon>
    </>
}