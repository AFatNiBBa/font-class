
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=solid right-left}
 * @preview ![right-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MCAxNjhIMzUxLjg5NVYyMzJDMzUxLjg5NSAyNDEuNTQ3IDM1Ny41NTUgMjUwLjE4OCAzNjYuMzEyIDI1NEMzNzUuMDY2IDI1Ny44MTIgMzg1LjI1OCAyNTYuMDc4IDM5Mi4yNSAyNDkuNTk0TDUwNC4zMiAxNDUuNTk0QzUxNC41NTkgMTM2LjA5NCA1MTQuNTU5IDExOS45MDYgNTA0LjMyIDExMC40MDZMMzkyLjI1IDYuNDA2QzM4NS4yNTggLTAuMDc4IDM3NS4wNjYgLTEuODEyIDM2Ni4zMTIgMS45OTZDMzU3LjU1NSA1LjgxMiAzNTEuODk1IDE0LjQ1MyAzNTEuODk1IDI0Vjg4SDQwQzE3LjkwNiA4OCAwIDEwNS45MDYgMCAxMjhTMTcuOTA2IDE2OCA0MCAxNjhaTTQ3MiAzNDRIMTYwLjEwNVYyODBDMTYwLjEwNSAyNzAuNDUzIDE1NC40NDUgMjYxLjgxMiAxNDUuNjg4IDI1OEMxMzYuOTM0IDI1NC4xODggMTI2Ljc0MiAyNTUuOTIyIDExOS43NSAyNjIuNDA2TDcuNjggMzY2LjQwNkMtMi41NTkgMzc1LjkwNiAtMi41NTkgMzkyLjA5NCA3LjY4IDQwMS41OTRMMTE5Ljc1IDUwNS41OTRDMTI2Ljc0MiA1MTIuMDc4IDEzNi45MzQgNTEzLjgxMiAxNDUuNjg4IDUxMEMxNTQuNDQ1IDUwNi4xODggMTYwLjEwNSA0OTcuNTQ3IDE2MC4xMDUgNDg4VjQyNEg0NzJDNDk0LjA5NCA0MjQgNTEyIDQwNi4wOTQgNTEyIDM4NFM0OTQuMDk0IDM0NCA0NzIgMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RightLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M40 168H351.895V232C351.895 241.547 357.555 250.188 366.312 254C375.066 257.812 385.258 256.078 392.25 249.594L504.32 145.594C514.559 136.094 514.559 119.906 504.32 110.406L392.25 6.406C385.258 -0.078 375.066 -1.812 366.312 1.996C357.555 5.812 351.895 14.453 351.895 24V88H40C17.906 88 0 105.906 0 128S17.906 168 40 168ZM472 344H160.105V280C160.105 270.453 154.445 261.812 145.688 258C136.934 254.188 126.742 255.922 119.75 262.406L7.68 366.406C-2.559 375.906 -2.559 392.094 7.68 401.594L119.75 505.594C126.742 512.078 136.934 513.812 145.688 510C154.445 506.188 160.105 497.547 160.105 488V424H472C494.094 424 512 406.094 512 384S494.094 344 472 344Z" />
        </Icon>
    </>
}