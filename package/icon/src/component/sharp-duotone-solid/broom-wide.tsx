
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=sharp-duotone-solid broom-wide}
 * @preview ![broom-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjggMTM2TDQ2NCAwbDQ4IDQ4TDM3NiAxODRsLTQ4LTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDk2bC02MS45IDM3LjhMMzc4LjIgMjg1LjkgNDE2IDIyNCAyODggOTZ6TTI0MCA1MTJMMzU2LjcgMzIxIDE5MSAxNTUuMyAwIDI3Mmw2OCA2OCA2MC0yMC0yMCA2MEwyNDAgNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M328 136L464 0l48 48L376 184l-48-48z" />
            <path d="M288 96l-61.9 37.8L378.2 285.9 416 224 288 96zM240 512L356.7 321 191 155.3 0 272l68 68 60-20-20 60L240 512z" />
    </Icon>
);

export default BroomWide;