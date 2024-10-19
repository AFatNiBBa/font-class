
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=solid bed-empty}
 * @preview ![bed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMzIwVjQ2NEM2NDAgNDcyLjgzNiA2MzIuODM2IDQ4MCA2MjQgNDgwSDU5MkM1ODMuMTY0IDQ4MCA1NzYgNDcyLjgzNiA1NzYgNDY0VjQxNkg2NFY0NjRDNjQgNDcyLjgzNiA1Ni44MzYgNDgwIDQ4IDQ4MEgxNkM3LjE2NCA0ODAgMCA0NzIuODM2IDAgNDY0VjQ4QzAgMzkuMTYyIDcuMTY0IDMyIDE2IDMySDQ4QzU2LjgzNiAzMiA2NCAzOS4xNjIgNjQgNDhWMjI0SDU0NEM1OTcuMDIgMjI0IDY0MCAyNjYuOTggNjQwIDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BedEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 320V464C640 472.836 632.836 480 624 480H592C583.164 480 576 472.836 576 464V416H64V464C64 472.836 56.836 480 48 480H16C7.164 480 0 472.836 0 464V48C0 39.162 7.164 32 16 32H48C56.836 32 64 39.162 64 48V224H544C597.02 224 640 266.98 640 320Z" />
        </Icon>
    </>
}