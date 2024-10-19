
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `guarani-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=thin guarani-sign}
 * @preview ![guarani-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQuMDM5IDI0MEgyMDAuMjcxVjgwLjIzQzI0My4yMTMgNzguMzU0IDI4NS43ODEgOTIuMjI3IDMxOS4yMDQgMTE5LjUzMUMzMjIuNjM2IDEyMi4yOTcgMzI3LjY1OSAxMjEuODI4IDMzMC40MzYgMTE4LjM5MUMzMzMuMjQ0IDExNC45NjkgMzMyLjcxMyAxMDkuOTIyIDMyOS4zMTIgMTA3LjEyNUMyOTMuMDIxIDc3LjQ5IDI0Ni44NjMgNjIuMzg1IDIwMC4yNzEgNjQuMjA1VjhDMjAwLjI3MSAzLjU3OCAxOTYuNjgzIDAgMTkyLjI4MyAwQzE4Ny44ODQgMCAxODQuMjk2IDMuNTc4IDE4NC4yOTYgOFY2NS42MzNDMTgzLjEwMSA2NS43NzkgMTgxLjkwMiA2NS43ODMgMTgwLjcwOCA2NS45NTNDMTI2Ljk1MSA3My42NzIgODAuMTIxIDEwMy4wNzggNDguODI3IDE0OC43MzRDOC45NTQgMjA2LjkwNiA1LjA4NSAyODQuNzAzIDM4Ljk2OCAzNDYuOTUzQzY2Ljk1NCAzOTguMzEzIDExNC4yMjIgNDMyLjg0NCAxNzIuMDY2IDQ0NC4yMDNDMTc2LjEyOCA0NDUgMTgwLjIxNSA0NDUuNDQ3IDE4NC4yOTYgNDQ1Ljk4OFY1MDRDMTg0LjI5NiA1MDguNDIyIDE4Ny44ODQgNTEyIDE5Mi4yODMgNTEyQzE5Ni42ODMgNTEyIDIwMC4yNzEgNTA4LjQyMiAyMDAuMjcxIDUwNFY0NDcuNDQ5QzIwMy43NTUgNDQ3LjYzMSAyMDcuMjQyIDQ0Ny45NTMgMjEwLjcyMiA0NDcuOTUzQzI1NS45NjIgNDQ3Ljk1MyAzMDAuMzkgNDMyLjc5NyAzMzQuODk3IDQwNC41OTRDMzU1LjkyNiAzODUuNDA2IDM2OCAzNTguMDYyIDM2OCAzMjkuNTk0VjI2NEMzNjggMjUwLjc2NiAzNTcuMjM2IDI0MCAzNDQuMDM5IDI0MFpNMTc1LjEyNCA0MjguNUMxMjIuMDIyIDQxOC4wNzggNzguNjU0IDM4Ni4zOTEgNTMuMDA4IDMzOS4yOTdDMjEuOTY1IDI4Mi4yODEgMjUuNDkgMjExLjA0NyA2MS45OTQgMTU3Ljc5N0M5MC43MjkgMTE1Ljg1OSAxMzMuNjkxIDg4Ljg3NSAxODIuOTg2IDgxLjc5N0MxODMuNDIzIDgxLjczNCAxODMuODYgODEuNzM2IDE4NC4yOTYgODEuNjc4VjI0MEgxMzYuMzc0QzEzMS45NzUgMjQwIDEyOC4zODcgMjQzLjU3OCAxMjguMzg3IDI0OFMxMzEuOTc1IDI1NiAxMzYuMzc0IDI1NkgxODQuMjk2VjQyOS43ODFDMTgxLjIzOSA0MjkuMzQgMTc4LjE2OCA0MjkuMDk4IDE3NS4xMjQgNDI4LjVaTTM1Mi4wMjYgMzI5LjU5NEMzNTIuMDI2IDM1My41NzggMzQxLjg1NSAzNzYuNTk0IDMyNC40NzYgMzkyLjQ2OUMyOTAuNDEyIDQyMC4yOTEgMjQ1LjQxMyA0MzQuMDE0IDIwMC4yNzEgNDMxLjQ1M1YyNTZIMzQ0LjAzOUMzNDguNDM4IDI1NiAzNTIuMDI2IDI1OS41OTQgMzUyLjAyNiAyNjRWMzI5LjU5NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GuaraniSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M344.039 240H200.271V80.23C243.213 78.354 285.781 92.227 319.204 119.531C322.636 122.297 327.659 121.828 330.436 118.391C333.244 114.969 332.713 109.922 329.312 107.125C293.021 77.49 246.863 62.385 200.271 64.205V8C200.271 3.578 196.683 0 192.283 0C187.884 0 184.296 3.578 184.296 8V65.633C183.101 65.779 181.902 65.783 180.708 65.953C126.951 73.672 80.121 103.078 48.827 148.734C8.954 206.906 5.085 284.703 38.968 346.953C66.954 398.313 114.222 432.844 172.066 444.203C176.128 445 180.215 445.447 184.296 445.988V504C184.296 508.422 187.884 512 192.283 512C196.683 512 200.271 508.422 200.271 504V447.449C203.755 447.631 207.242 447.953 210.722 447.953C255.962 447.953 300.39 432.797 334.897 404.594C355.926 385.406 368 358.062 368 329.594V264C368 250.766 357.236 240 344.039 240ZM175.124 428.5C122.022 418.078 78.654 386.391 53.008 339.297C21.965 282.281 25.49 211.047 61.994 157.797C90.729 115.859 133.691 88.875 182.986 81.797C183.423 81.734 183.86 81.736 184.296 81.678V240H136.374C131.975 240 128.387 243.578 128.387 248S131.975 256 136.374 256H184.296V429.781C181.239 429.34 178.168 429.098 175.124 428.5ZM352.026 329.594C352.026 353.578 341.855 376.594 324.476 392.469C290.412 420.291 245.413 434.014 200.271 431.453V256H344.039C348.438 256 352.026 259.594 352.026 264V329.594Z" />
        </Icon>
    </>
}