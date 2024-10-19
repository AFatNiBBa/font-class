
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=duotone sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiA2NEgxMjhWMTZDMTI4IDcuMjUgMTIwLjc1IDAgMTEyIDBIODBDNzEuMjUgMCA2NCA3LjI1IDY0IDE2VjY0SDE2QzcuMjUgNjQgMCA3MS4yNSAwIDgwVjExMkMwIDEyMC43NSA3LjI1IDEyOCAxNiAxMjhINjRWNDk2QzY0IDUwNC43NSA3MS4yNSA1MTIgODAgNTEySDExMkMxMjAuNzUgNTEyIDEyOCA1MDQuNzUgMTI4IDQ5NlYxMjhINDk2QzUwNC43NSAxMjggNTEyIDEyMC43NSA1MTIgMTEyVjgwQzUxMiA3MS4yNSA1MDQuNzUgNjQgNDk2IDY0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNjAgMzg0SDQ4MFYxMjhIMTYwVjM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M496 64H128V16C128 7.25 120.75 0 112 0H80C71.25 0 64 7.25 64 16V64H16C7.25 64 0 71.25 0 80V112C0 120.75 7.25 128 16 128H64V496C64 504.75 71.25 512 80 512H112C120.75 512 128 504.75 128 496V128H496C504.75 128 512 120.75 512 112V80C512 71.25 504.75 64 496 64Z" />
            <path d="M160 384H480V128H160V384Z" />
    </Icon>
);

export default SignHanging;