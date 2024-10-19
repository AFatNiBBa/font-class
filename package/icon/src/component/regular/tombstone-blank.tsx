
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tombstone-blank` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=regular tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgNDY0SDQxNi4wMTZMNDE1Ljk5NCAxOTEuOTczQzQxNS45ODQgODUuOTc5IDMyOS45NzUgLTAuMDEgMjIzLjk3NyAwQzExNy45NzUgMC4wMSAzMS45ODQgODYuMDE0IDMxLjk5NCAxOTIuMDA4TDMyLjAxNiA0NjRIMjRDMTAuNzQ2IDQ2NCAwIDQ3NC43NDQgMCA0ODhDMCA1MDEuMjU0IDEwLjc0NiA1MTIgMjQgNTEySDQyNEM0MzcuMjU0IDUxMiA0NDggNTAxLjI1NCA0NDggNDg4QzQ0OCA0NzQuNzQ0IDQzNy4yNTQgNDY0IDQyNCA0NjRaTTc5Ljk5NCAxOTIuMDA0Qzc5Ljk4NiAxMTIuNjMzIDE0NC42MDUgNDguMDA2IDIyMy45OCA0Ny45OThTMzY3Ljk4NiAxMTIuNjA1IDM2Ny45OTQgMTkxLjk3N0wzNjguMDE2IDQ2NEg4MC4wMTZMNzkuOTk0IDE5Mi4wMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TombstoneBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 464H416.016L415.994 191.973C415.984 85.979 329.975 -0.01 223.977 0C117.975 0.01 31.984 86.014 31.994 192.008L32.016 464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H424C437.254 512 448 501.254 448 488C448 474.744 437.254 464 424 464ZM79.994 192.004C79.986 112.633 144.605 48.006 223.98 47.998S367.986 112.605 367.994 191.977L368.016 464H80.016L79.994 192.004Z" />
        </Icon>
    </>
}