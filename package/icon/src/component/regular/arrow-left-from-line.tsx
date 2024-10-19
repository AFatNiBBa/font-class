
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-line` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-line?s=regular arrow-left-from-line}
 * @preview ![arrow-left-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTkuOTY4IDg4VjQyNEMzOTkuOTY4IDQzNy4yNSA0MTAuNzI1IDQ0OCA0MjMuOTg0IDQ0OFM0NDggNDM3LjI1IDQ0OCA0MjRWODhDNDQ4IDc0Ljc1IDQzNy4yNDMgNjQgNDIzLjk4NCA2NFMzOTkuOTY4IDc0Ljc1IDM5OS45NjggODhaTTE3Ni4yNTcgMzY2LjUzMUw4NC4yODIgMjgwSDMyNy45MkMzNDEuMTc5IDI4MCAzNTEuOTM2IDI2OS4yNSAzNTEuOTM2IDI1NlMzNDEuMTc5IDIzMiAzMjcuOTIgMjMySDg0LjI4MkwxNzYuMjU3IDE0NS40NjlDMTgxLjI5MiAxNDAuNzUgMTgzLjgyNSAxMzQuMzc1IDE4My44MjUgMTI4QzE4My44MjUgMTIyLjA5NCAxODEuNjY3IDExNi4xODggMTc3LjI4OSAxMTEuNTYyQzE2OC4yMjEgMTAxLjkwNiAxNTMuMDIzIDEwMS40MzggMTQzLjM2MSAxMTAuNTMxTDcuMjcgMjM4LjUzMUMtMi40MjMgMjQ3LjU5NCAtMi40MjMgMjY0LjQwNiA3LjI3IDI3My40NjlMMTQzLjM2MSA0MDEuNDY5QzE1My4wMjMgNDEwLjU2MyAxNjguMjIxIDQxMC4wOTQgMTc3LjI4OSA0MDAuNDM4QzE4Ni4zODkgMzkwLjgxMiAxODUuOTUxIDM3NS42MjUgMTc2LjI1NyAzNjYuNTMxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeftFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M399.968 88V424C399.968 437.25 410.725 448 423.984 448S448 437.25 448 424V88C448 74.75 437.243 64 423.984 64S399.968 74.75 399.968 88ZM176.257 366.531L84.282 280H327.92C341.179 280 351.936 269.25 351.936 256S341.179 232 327.92 232H84.282L176.257 145.469C181.292 140.75 183.825 134.375 183.825 128C183.825 122.094 181.667 116.188 177.289 111.562C168.221 101.906 153.023 101.438 143.361 110.531L7.27 238.531C-2.423 247.594 -2.423 264.406 7.27 273.469L143.361 401.469C153.023 410.563 168.221 410.094 177.289 400.438C186.389 390.812 185.951 375.625 176.257 366.531Z" />
        </Icon>
    </>
}