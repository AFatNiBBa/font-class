
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `right-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=regular right-long}
 * @preview ![right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjYuMzEzIDM4MkMzNTcuNTU1IDM3OC4xODkgMzUxLjg5NSAzNjkuNTQ4IDM1MS44OTUgMzYwLjAwMVYyODBIMjRDMTAuNzUgMjgwIDAgMjY5LjI1IDAgMjU2QzAgMjQyLjc1IDEwLjc1IDIzMiAyNCAyMzJIMzUxLjg5NVYxNTJDMzUxLjg5NSAxNDIuNDUzIDM1Ny41NTUgMTMzLjgxMiAzNjYuMzEyIDEyOS45OThDMzc1LjA2NiAxMjYuMTg3IDM4NS4yNjIgMTI3LjkyMSAzOTIuMjUgMTM0LjQwNkw1MDQuMzI0IDIzOC40MDZDNTE0LjU1OSAyNDcuOTA2IDUxNC41NTkgMjY0LjA5NSA1MDQuMzI0IDI3My41OTNMMzkyLjI1IDM3Ny41OTVDMzg1LjI2MiAzODQuMDggMzc1LjA2NiAzODUuODE0IDM2Ni4zMTMgMzgyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RightLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M366.313 382C357.555 378.189 351.895 369.548 351.895 360.001V280H24C10.75 280 0 269.25 0 256C0 242.75 10.75 232 24 232H351.895V152C351.895 142.453 357.555 133.812 366.312 129.998C375.066 126.187 385.262 127.921 392.25 134.406L504.324 238.406C514.559 247.906 514.559 264.095 504.324 273.593L392.25 377.595C385.262 384.08 375.066 385.814 366.313 382Z" />
        </Icon>
    </>
}