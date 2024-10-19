
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-duotone-solid burger}
 * @preview ![burger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJsMCAzMiA0NDggMCAwLTMyczAtMTYwLTIyNC0xNjBTMzIgMTkyIDMyIDE5MnptMCAxOTJsMCA5NiA0NDggMCAwLTk2TDMyIDM4NHpNMTQ0IDEyOGExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAwek0yNzIgOTZhMTYgMTYgMCAxIDEgLTMyIDAgMTYgMTYgMCAxIDEgMzIgMHptMTI4IDMyYTE2IDE2IDAgMSAxIC0zMiAwIDE2IDE2IDAgMSAxIDMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNiAyNTZINDk2djk2SDE2VjI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192l0 32 448 0 0-32s0-160-224-160S32 192 32 192zm0 192l0 96 448 0 0-96L32 384zM144 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm128 32a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
            <path d="M16 256H496v96H16V256z" />
    </Icon>
);

export default Burger;