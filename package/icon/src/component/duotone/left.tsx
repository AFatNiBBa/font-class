
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=duotone left}
 * @preview ![left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAyMjRWMjg4QzQ0OCAzMDUuNjc0IDQzMy42NzQgMzIwIDQxNiAzMjBIMjI0VjE5Mkg0MTZDNDMzLjY3NCAxOTIgNDQ4IDIwNi4zMjggNDQ4IDIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjI0IDQxNkMyMjQgNDI4LjkzOCAyMTYuMjAzIDQ0MC42MDkgMjA0LjI1IDQ0NS41NjJDMTkyLjI4MSA0NTAuNTE2IDE3OC41MzEgNDQ3Ljc4MSAxNjkuMzc1IDQzOC42MjVMOS4zNzUgMjc4LjYyNUMzLjEyNSAyNzIuMzc1IDAgMjY0LjE4OCAwIDI1NlMzLjEyNSAyMzkuNjI1IDkuMzc1IDIzMy4zNzVMMTY5LjM3NSA3My4zNzVDMTc4LjUzMSA2NC4yMTkgMTkyLjI4MSA2MS40ODQgMjA0LjI1IDY2LjQzOEMyMTYuMjAzIDcxLjM5MSAyMjQgODMuMDYyIDIyNCA5NlY0MTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Left(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M448 224V288C448 305.674 433.674 320 416 320H224V192H416C433.674 192 448 206.328 448 224Z" />
            <path d="M224 416C224 428.938 216.203 440.609 204.25 445.562C192.281 450.516 178.531 447.781 169.375 438.625L9.375 278.625C3.125 272.375 0 264.188 0 256S3.125 239.625 9.375 233.375L169.375 73.375C178.531 64.219 192.281 61.484 204.25 66.438C216.203 71.391 224 83.062 224 96V416Z" />
        </Icon>
    </>
}