
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `compress-wide` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=light compress-wide}
 * @preview ![compress-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMjI0SDQ5NkM1MDQuODQ0IDIyNCA1MTIgMjE2Ljg0NCA1MTIgMjA4UzUwNC44NDQgMTkyIDQ5NiAxOTJIMzg0VjgwQzM4NCA3MS4xNTYgMzc2Ljg0NCA2NCAzNjggNjRTMzUyIDcxLjE1NiAzNTIgODBWMjA4QzM1MiAyMTYuODQ0IDM1OS4xNTYgMjI0IDM2OCAyMjRaTTE0NCAyODhIMTZDNy4xNTYgMjg4IDAgMjk1LjE1NiAwIDMwNFM3LjE1NiAzMjAgMTYgMzIwSDEyOFY0MzJDMTI4IDQ0MC44NDQgMTM1LjE1NiA0NDggMTQ0IDQ0OFMxNjAgNDQwLjg0NCAxNjAgNDMyVjMwNEMxNjAgMjk1LjE1NiAxNTIuODQ0IDI4OCAxNDQgMjg4Wk00OTYgMjg4SDM2OEMzNTkuMTU2IDI4OCAzNTIgMjk1LjE1NiAzNTIgMzA0VjQzMkMzNTIgNDQwLjg0NCAzNTkuMTU2IDQ0OCAzNjggNDQ4UzM4NCA0NDAuODQ0IDM4NCA0MzJWMzIwSDQ5NkM1MDQuODQ0IDMyMCA1MTIgMzEyLjg0NCA1MTIgMzA0UzUwNC44NDQgMjg4IDQ5NiAyODhaTTE0NCA2NEMxMzUuMTU2IDY0IDEyOCA3MS4xNTYgMTI4IDgwVjE5MkgxNkM3LjE1NiAxOTIgMCAxOTkuMTU2IDAgMjA4UzcuMTU2IDIyNCAxNiAyMjRIMTQ0QzE1Mi44NDQgMjI0IDE2MCAyMTYuODQ0IDE2MCAyMDhWODBDMTYwIDcxLjE1NiAxNTIuODQ0IDY0IDE0NCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CompressWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M368 224H496C504.844 224 512 216.844 512 208S504.844 192 496 192H384V80C384 71.156 376.844 64 368 64S352 71.156 352 80V208C352 216.844 359.156 224 368 224ZM144 288H16C7.156 288 0 295.156 0 304S7.156 320 16 320H128V432C128 440.844 135.156 448 144 448S160 440.844 160 432V304C160 295.156 152.844 288 144 288ZM496 288H368C359.156 288 352 295.156 352 304V432C352 440.844 359.156 448 368 448S384 440.844 384 432V320H496C504.844 320 512 312.844 512 304S504.844 288 496 288ZM144 64C135.156 64 128 71.156 128 80V192H16C7.156 192 0 199.156 0 208S7.156 224 16 224H144C152.844 224 160 216.844 160 208V80C160 71.156 152.844 64 144 64Z" />
        </Icon>
    </>
}