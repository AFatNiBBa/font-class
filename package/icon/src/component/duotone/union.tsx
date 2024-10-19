
import { Icon, generic } from "../../index";

/**
 * A component that renders the `union` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=duotone union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA0ODBDODYuMTI1IDQ4MCAwIDM5My44NzUgMCAyODhWNzJDMCA0OS45MDYgMTcuOTA2IDMyIDQwIDMyUzgwIDQ5LjkwNiA4MCA3MlYyODhDODAgMzQ5Ljc1IDEzMC4yNSA0MDAgMTkyIDQwMFMzMDQgMzQ5Ljc1IDMwNCAyODhWNzJDMzA0IDQ5LjkwNiAzMjEuOTA2IDMyIDM0NCAzMlMzODQgNDkuOTA2IDM4NCA3MlYyODhDMzg0IDM5My44NzUgMjk3Ljg3NSA0ODAgMTkyIDQ4MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 480C86.125 480 0 393.875 0 288V72C0 49.906 17.906 32 40 32S80 49.906 80 72V288C80 349.75 130.25 400 192 400S304 349.75 304 288V72C304 49.906 321.906 32 344 32S384 49.906 384 72V288C384 393.875 297.875 480 192 480Z" />
    </Icon>
);

export default Union;