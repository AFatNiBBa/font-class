
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pig` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pig?s=solid pig}
 * @preview ![pig](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTkuOTk5IDE5Mkg1MzAuNDk4QzUyMS43NDcgMTcyIDUwOC44NzIgMTU0LjI1IDQ5My4xMjEgMTM5LjVMNTExLjk5NyA2NEg0NzkuOTk1QzQ1MC42MTkgNjQgNDI0LjYxOCA3Ny41IDQwNi45OTIgOTguMzc1QzM5OS4zNjYgOTcuMjUgMzkxLjg2NiA5NiAzODMuOTkxIDk2SDI1NS45ODRDMTc4LjYwNiA5NiAxMTMuOTc4IDE1MSA5OS4yMjcgMjI0SDU1Ljk3NUM0MS4yMjQgMjI0IDI5LjQ3MyAyMTAuNSAzMi40NzQgMTk1LjI1QzM0LjU5OSAxODMuODc1IDQ1LjM0OSAxNzYgNTYuOTc1IDE3Nkg1Ny45NzVDNjEuMjI1IDE3NiA2My45NzUgMTczLjI1IDYzLjk3NSAxNzAuMDAxVjE1MC4wMDFDNjMuOTc1IDE0Ni43NSA2MS4yMjUgMTQ0IDU3Ljk3NSAxNDRDMjkuNDczIDE0NCA0LjA5NyAxNjQuMzc1IDAuNDcyIDE5Mi42MjVDLTMuOTAzIDIyNi43NSAyMi43MjMgMjU2IDU1Ljk3NSAyNTZIOTUuOTc3Qzk1Ljk3NyAzMDguMTI1IDEyMS4zNTMgMzU0LjEyNSAxNTkuOTggMzgzLjI1VjQ0OEMxNTkuOTggNDY1LjY3MyAxNzQuMzA3IDQ4MCAxOTEuOTgxIDQ4MEgyMjMuOTgzQzI0MS42NTcgNDgwIDI1NS45ODQgNDY1LjY3MyAyNTUuOTg0IDQ0OFY0MTZIMzgzLjk5MVY0NDhDMzgzLjk5MSA0NjUuNjczIDM5OC4zMTggNDgwIDQxNS45OTIgNDgwSDQ0Ny45OTRDNDY1LjY2OCA0ODAgNDc5Ljk5NSA0NjUuNjczIDQ3OS45OTUgNDQ4VjM4My4yNUM0OTEuODcxIDM3NC4zNzUgNTAyLjM3MSAzNjMuODc1IDUxMS4yNDcgMzUySDU1OS45OTlDNTY4LjgzNiAzNTIgNTc2IDM0NC44MzcgNTc2IDMzNlYyMDhDNTc2IDE5OS4xNjMgNTY4LjgzNiAxOTIgNTU5Ljk5OSAxOTJaTTQzMS45OTMgMjU2QzQyMy4xMTggMjU2IDQxNS45OTIgMjQ4Ljg3NSA0MTUuOTkyIDI0MFM0MjMuMTE4IDIyNCA0MzEuOTkzIDIyNFM0NDcuOTk0IDIzMS4xMjUgNDQ3Ljk5NCAyNDBTNDQwLjg2OCAyNTYgNDMxLjk5MyAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Pig(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M559.999 192H530.498C521.747 172 508.872 154.25 493.121 139.5L511.997 64H479.995C450.619 64 424.618 77.5 406.992 98.375C399.366 97.25 391.866 96 383.991 96H255.984C178.606 96 113.978 151 99.227 224H55.975C41.224 224 29.473 210.5 32.474 195.25C34.599 183.875 45.349 176 56.975 176H57.975C61.225 176 63.975 173.25 63.975 170.001V150.001C63.975 146.75 61.225 144 57.975 144C29.473 144 4.097 164.375 0.472 192.625C-3.903 226.75 22.723 256 55.975 256H95.977C95.977 308.125 121.353 354.125 159.98 383.25V448C159.98 465.673 174.307 480 191.981 480H223.983C241.657 480 255.984 465.673 255.984 448V416H383.991V448C383.991 465.673 398.318 480 415.992 480H447.994C465.668 480 479.995 465.673 479.995 448V383.25C491.871 374.375 502.371 363.875 511.247 352H559.999C568.836 352 576 344.837 576 336V208C576 199.163 568.836 192 559.999 192ZM431.993 256C423.118 256 415.992 248.875 415.992 240S423.118 224 431.993 224S447.994 231.125 447.994 240S440.868 256 431.993 256Z" />
        </Icon>
    </>
}