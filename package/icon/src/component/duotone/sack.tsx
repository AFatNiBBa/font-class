
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=duotone sack}
 * @preview ![sack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmMwIDUzIDQzIDk2IDk2IDk2bDMyMCAwYzUzIDAgOTYtNDMgOTYtOTZjMC0xNjUuMS0xMjIuMy0yNDMuMy0xNzktMjc5LjZjLTQuOC0zLjEtOS4yLTUuOS0xMy04LjRsLTEyOCAwYy0zLjggMi41LTguMSA1LjMtMTMgOC40QzEyMi4zIDE3Mi43IDAgMjUwLjkgMCA0MTZ6TTE0NC42IDI0LjlMMTkyIDk2bDEyOCAwIDQ3LjQtNzEuMUMzNzQuNSAxNC4yIDM2Ni45IDAgMzU0LjEgMEwxNTcuOSAwYy0xMi44IDAtMjAuNCAxNC4yLTEzLjMgMjQuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAxMTJjMC04LjggNy4yLTE2IDE2LTE2bDEyOCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0xMjggMGMtOC44IDAtMTYtNy4yLTE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4l-128 0c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416zM144.6 24.9L192 96l128 0 47.4-71.1C374.5 14.2 366.9 0 354.1 0L157.9 0c-12.8 0-20.4 14.2-13.3 24.9z" />
            <path d="M176 112c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Sack;