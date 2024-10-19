
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowling-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball?s=duotone bowling-ball}
 * @preview ![bowling-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMTc2YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6bTk2LTY0YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6bTAgOTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA1MTJBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0yNDAgODBhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0ek0yMDggMjA4YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bS02NC02NGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BowlingBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 176a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96-64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default BowlingBall;