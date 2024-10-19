
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=duotone bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAzMkgzMkMxNC40IDMyIDAgNDYuNCAwIDY0VjQ0OEMwIDQ2NS42IDE0LjQgNDgwIDMyIDQ4MEgxMjhDMTQ1LjY3MyA0ODAgMTYwIDQ2NS42NzMgMTYwIDQ0OFY0NDhDMTYwIDQzMC4zMjcgMTQ1LjY3MyA0MTYgMTI4IDQxNkg2NFY5NkgxMjhDMTQ1LjY3MyA5NiAxNjAgODEuNjczIDE2MCA2NFY2NEMxNjAgNDYuMzI3IDE0NS42NzMgMzIgMTI4IDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M128 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H128C145.673 480 160 465.673 160 448V448C160 430.327 145.673 416 128 416H64V96H128C145.673 96 160 81.673 160 64V64C160 46.327 145.673 32 128 32Z" />
    </Icon>
);

export default BracketSquare;