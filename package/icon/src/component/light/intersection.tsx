
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `intersection` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=light intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjI0VjQ2NEMzODQgNDcyLjg0NCAzNzYuODQ0IDQ4MCAzNjggNDgwUzM1MiA0NzIuODQ0IDM1MiA0NjRWMjI0QzM1MiAxMzUuNzgxIDI4MC4yMTkgNjQgMTkyIDY0UzMyIDEzNS43ODEgMzIgMjI0VjQ2NEMzMiA0NzIuODQ0IDI0Ljg0NCA0ODAgMTYgNDgwUzAgNDcyLjg0NCAwIDQ2NFYyMjRDMCAxMTguMTI1IDg2LjEyNSAzMiAxOTIgMzJTMzg0IDExOC4xMjUgMzg0IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Intersection(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 224V464C384 472.844 376.844 480 368 480S352 472.844 352 464V224C352 135.781 280.219 64 192 64S32 135.781 32 224V464C32 472.844 24.844 480 16 480S0 472.844 0 464V224C0 118.125 86.125 32 192 32S384 118.125 384 224Z" />
        </Icon>
    </>
}