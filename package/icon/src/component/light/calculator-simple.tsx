
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calculator-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=light calculator-simple}
 * @preview ![calculator-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTI4SDM4NFYxNzZDMzg0IDE4NC44NDQgMzkxLjE1NiAxOTIgNDAwIDE5MlM0MTYgMTg0Ljg0NCA0MTYgMTc2VjEyOEg0NjRDNDcyLjg0NCAxMjggNDgwIDEyMC44NDQgNDgwIDExMlM0NzIuODQ0IDk2IDQ2NCA5Nkg0MTZWNDhDNDE2IDM5LjE1NiA0MDguODQ0IDMyIDQwMCAzMlMzODQgMzkuMTU2IDM4NCA0OFY5NkgzMzZDMzI3LjE1NiA5NiAzMjAgMTAzLjE1NiAzMjAgMTEyUzMyNy4xNTYgMTI4IDMzNiAxMjhaTTE2OC41NjggMzQzLjQzMkMxNjIuMzE0IDMzNy4xNzggMTUyLjE5NSAzMzcuMTc4IDE0NS45NDEgMzQzLjQzMkwxMTIgMzc3LjM3M0w3OC4wNTkgMzQzLjQzMkM3MS44MDUgMzM3LjE3OCA2MS42ODYgMzM3LjE3OCA1NS40MzIgMzQzLjQzMlM0OS4xNzggMzU5LjgwNSA1NS40MzIgMzY2LjA1OUw4OS4zNzMgNDAwTDU1LjQzMiA0MzMuOTQxQzQ5LjE3OCA0NDAuMTk1IDQ5LjE3OCA0NTAuMzE0IDU1LjQzMiA0NTYuNTY4UzcxLjgwNSA0NjIuODIyIDc4LjA1OSA0NTYuNTY4TDExMiA0MjIuNjI3TDE0NS45NDEgNDU2LjU2OEMxNTIuMTk1IDQ2Mi44MjIgMTYyLjMxNCA0NjIuODIyIDE2OC41NjggNDU2LjU2OFMxNzQuODIyIDQ0MC4xOTUgMTY4LjU2OCA0MzMuOTQxTDEzNC42MjcgNDAwTDE2OC41NjggMzY2LjA1OUMxNzQuODIyIDM1OS44MDUgMTc0LjgyMiAzNDkuNjg2IDE2OC41NjggMzQzLjQzMlpNNDggMTI4SDE3NkMxODQuODQ0IDEyOCAxOTIgMTIwLjg0NCAxOTIgMTEyUzE4NC44NDQgOTYgMTc2IDk2SDQ4QzM5LjE1NiA5NiAzMiAxMDMuMTU2IDMyIDExMlMzOS4xNTYgMTI4IDQ4IDEyOFpNNDk2IDI0MEgyNzJWMTZDMjcyIDcuMTU2IDI2NC44NDQgMCAyNTYgMFMyNDAgNy4xNTYgMjQwIDE2VjI0MEgxNkM3LjE1NiAyNDAgMCAyNDcuMTU2IDAgMjU2UzcuMTU2IDI3MiAxNiAyNzJIMjQwVjQ5NkMyNDAgNTA0Ljg0NCAyNDcuMTU2IDUxMiAyNTYgNTEyUzI3MiA1MDQuODQ0IDI3MiA0OTZWMjcySDQ5NkM1MDQuODQ0IDI3MiA1MTIgMjY0Ljg0NCA1MTIgMjU2UzUwNC44NDQgMjQwIDQ5NiAyNDBaTTQ2NCA0MTZIMzM2QzMyNy4xNTYgNDE2IDMyMCA0MjMuMTU2IDMyMCA0MzJTMzI3LjE1NiA0NDggMzM2IDQ0OEg0NjRDNDcyLjg0NCA0NDggNDgwIDQ0MC44NDQgNDgwIDQzMlM0NzIuODQ0IDQxNiA0NjQgNDE2Wk00NjQgMzUySDMzNkMzMjcuMTU2IDM1MiAzMjAgMzU5LjE1NiAzMjAgMzY4UzMyNy4xNTYgMzg0IDMzNiAzODRINDY0QzQ3Mi44NDQgMzg0IDQ4MCAzNzYuODQ0IDQ4MCAzNjhTNDcyLjg0NCAzNTIgNDY0IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalculatorSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 128H384V176C384 184.844 391.156 192 400 192S416 184.844 416 176V128H464C472.844 128 480 120.844 480 112S472.844 96 464 96H416V48C416 39.156 408.844 32 400 32S384 39.156 384 48V96H336C327.156 96 320 103.156 320 112S327.156 128 336 128ZM168.568 343.432C162.314 337.178 152.195 337.178 145.941 343.432L112 377.373L78.059 343.432C71.805 337.178 61.686 337.178 55.432 343.432S49.178 359.805 55.432 366.059L89.373 400L55.432 433.941C49.178 440.195 49.178 450.314 55.432 456.568S71.805 462.822 78.059 456.568L112 422.627L145.941 456.568C152.195 462.822 162.314 462.822 168.568 456.568S174.822 440.195 168.568 433.941L134.627 400L168.568 366.059C174.822 359.805 174.822 349.686 168.568 343.432ZM48 128H176C184.844 128 192 120.844 192 112S184.844 96 176 96H48C39.156 96 32 103.156 32 112S39.156 128 48 128ZM496 240H272V16C272 7.156 264.844 0 256 0S240 7.156 240 16V240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H240V496C240 504.844 247.156 512 256 512S272 504.844 272 496V272H496C504.844 272 512 264.844 512 256S504.844 240 496 240ZM464 416H336C327.156 416 320 423.156 320 432S327.156 448 336 448H464C472.844 448 480 440.844 480 432S472.844 416 464 416ZM464 352H336C327.156 352 320 359.156 320 368S327.156 384 336 384H464C472.844 384 480 376.844 480 368S472.844 352 464 352Z" />
        </Icon>
    </>
}