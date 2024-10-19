
import { Icon, generic } from "../../index";

/**
 * A component that renders the `axe-battle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe-battle?s=sharp-duotone-solid axe-battle}
 * @preview ![axe-battle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDMyMCA4OCAzODQgODggMzg0czMzLjItMTA2LjMgMTM2LTEyNS4ybDAtMTMzLjdDMTIxLjIgMTA2LjMgODggMCA4OCAwUzAgNjQgMCAxOTJ6bTI4OC02Ni44bDAgMTMzLjdDMzkwLjggMjc3LjcgNDI0IDM4NCA0MjQgMzg0czczLjctNTMuNiA4Ni4yLTE2MC45TDQ0OCAxOTJsNjIuMi0zMS4xQzQ5Ny43IDUzLjYgNDI0IDAgNDI0IDBzLTMzLjIgMTA2LjMtMTM2IDEyNS4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDY0bDAtMzItNjQgMCAwIDMyIDAgNDE2IDAgMzIgNjQgMCAwLTMyIDAtNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AxeBattle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 320 88 384 88 384s33.2-106.3 136-125.2l0-133.7C121.2 106.3 88 0 88 0S0 64 0 192zm288-66.8l0 133.7C390.8 277.7 424 384 424 384s73.7-53.6 86.2-160.9L448 192l62.2-31.1C497.7 53.6 424 0 424 0s-33.2 106.3-136 125.2z" />
            <path d="M288 64l0-32-64 0 0 32 0 416 0 32 64 0 0-32 0-416z" />
    </Icon>
);

export default AxeBattle;