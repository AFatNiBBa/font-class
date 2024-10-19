
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `simplybuilt` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/simplybuilt?s=brands simplybuilt}
 * @preview ![simplybuilt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuMiA2NGgtMTA2Yy0xNC41IDAtMjYuNiAxMS44LTI2LjYgMjYuM3YzOS42SDE2My4zVjkwLjNjMC0xNC41LTEyLTI2LjMtMjYuNi0yNi4zaC0xMDZDMTYuMSA2NCA0LjMgNzUuOCA0LjMgOTAuM3YzMzEuNGMwIDE0LjUgMTEuOCAyNi4zIDI2LjYgMjYuM2g0NTAuNGMxNC44IDAgMjYuNi0xMS44IDI2LjYtMjYuM1Y5MC4zYy0uMi0xNC41LTEyLTI2LjMtMjYuNy0yNi4zek0xNDkuOCAzNTUuOGMtMzYuNiAwLTY2LjQtMjkuNy02Ni40LTY2LjQgMC0zNi45IDI5LjctNjYuNiA2Ni40LTY2LjYgMzYuOSAwIDY2LjYgMjkuNyA2Ni42IDY2LjYgMCAzNi43LTI5LjcgNjYuNC02Ni42IDY2LjR6bTIxMi40IDBjLTM2LjkgMC02Ni42LTI5LjctNjYuNi02Ni42IDAtMzYuNiAyOS43LTY2LjQgNjYuNi02Ni40IDM2LjYgMCA2Ni40IDI5LjcgNjYuNCA2Ni40IDAgMzYuOS0yOS44IDY2LjYtNjYuNCA2Ni42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Simplybuilt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.2 64h-106c-14.5 0-26.6 11.8-26.6 26.3v39.6H163.3V90.3c0-14.5-12-26.3-26.6-26.3h-106C16.1 64 4.3 75.8 4.3 90.3v331.4c0 14.5 11.8 26.3 26.6 26.3h450.4c14.8 0 26.6-11.8 26.6-26.3V90.3c-.2-14.5-12-26.3-26.7-26.3zM149.8 355.8c-36.6 0-66.4-29.7-66.4-66.4 0-36.9 29.7-66.6 66.4-66.6 36.9 0 66.6 29.7 66.6 66.6 0 36.7-29.7 66.4-66.6 66.4zm212.4 0c-36.9 0-66.6-29.7-66.6-66.6 0-36.6 29.7-66.4 66.6-66.4 36.6 0 66.4 29.7 66.4 66.4 0 36.9-29.8 66.6-66.4 66.6z" />
        </Icon>
    </>
}