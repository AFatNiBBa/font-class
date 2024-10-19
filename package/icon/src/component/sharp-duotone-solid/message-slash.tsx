
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=sharp-duotone-solid message-slash}
 * @preview ![message-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwTDU3NiAwbDAgNDE2LTEwLjggMEMzOTguMSAyODYuMyAyMzEuMSAxNTYuNiA2NCAyNi45TDY0IDB6bTAgMTQ2LjRMNDA2LjIgNDE2IDM2OCA0MTYgMjI0IDUxMmwwLTk2TDY0IDQxNmwwLTI2OS42eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 0L576 0l0 416-10.8 0C398.1 286.3 231.1 156.6 64 26.9L64 0zm0 146.4L406.2 416 368 416 224 512l0-96L64 416l0-269.6z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default MessageSlash;