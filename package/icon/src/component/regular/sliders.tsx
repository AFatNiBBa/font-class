
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sliders` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sliders?s=regular sliders}
 * @preview ![sliders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNzJIMjRDMTAuNzQ1IDcyIDAgODIuNzQ1IDAgOTZWOTZDMCAxMDkuMjU1IDEwLjc0NSAxMjAgMjQgMTIwSDE5MlY3MlpNNDg4IDIzMkg0MDBWMjE2QzQwMCAyMDIuNzUgMzg5LjI1IDE5MiAzNzYgMTkyUzM1MiAyMDIuNzUgMzUyIDIxNlYyOTZDMzUyIDMwOS4yNSAzNjIuNzUgMzIwIDM3NiAzMjBTNDAwIDMwOS4yNSA0MDAgMjk2VjI4MEg0ODhDNTAxLjI1IDI4MCA1MTIgMjY5LjI1IDUxMiAyNTZTNTAxLjI1IDIzMiA0ODggMjMyWk00ODggMzkySDE3NlYzNzZDMTc2IDM2Mi43NSAxNjUuMjUgMzUyIDE1MiAzNTJTMTI4IDM2Mi43NSAxMjggMzc2VjQ1NkMxMjggNDY5LjI1IDEzOC43NSA0ODAgMTUyIDQ4MFMxNzYgNDY5LjI1IDE3NiA0NTZWNDQwSDQ4OEM1MDEuMjUgNDQwIDUxMiA0MjkuMjUgNTEyIDQxNlM1MDEuMjUgMzkyIDQ4OCAzOTJaTTMyMCAyMzJIMjRDMTAuNzQ1IDIzMiAwIDI0Mi43NDUgMCAyNTZWMjU2QzAgMjY5LjI1NSAxMC43NDUgMjgwIDI0IDI4MEgzMjBWMjMyWk0yNCA0NDBIOTZWMzkySDI0QzEwLjc0NSAzOTIgMCA0MDIuNzQ1IDAgNDE2VjQxNkMwIDQyOS4yNTUgMTAuNzQ1IDQ0MCAyNCA0NDBaTTI0OCAxNjBDMjYxLjI1IDE2MCAyNzIgMTQ5LjI1IDI3MiAxMzZWMTIwSDQ4OEM1MDEuMjUgMTIwIDUxMiAxMDkuMjUgNTEyIDk2UzUwMS4yNSA3MiA0ODggNzJIMjcyVjU2QzI3MiA0Mi43NSAyNjEuMjUgMzIgMjQ4IDMyUzIyNCA0Mi43NSAyMjQgNTZWMTM2QzIyNCAxNDkuMjUgMjM0Ljc1IDE2MCAyNDggMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sliders(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192 72H24C10.745 72 0 82.745 0 96V96C0 109.255 10.745 120 24 120H192V72ZM488 232H400V216C400 202.75 389.25 192 376 192S352 202.75 352 216V296C352 309.25 362.75 320 376 320S400 309.25 400 296V280H488C501.25 280 512 269.25 512 256S501.25 232 488 232ZM488 392H176V376C176 362.75 165.25 352 152 352S128 362.75 128 376V456C128 469.25 138.75 480 152 480S176 469.25 176 456V440H488C501.25 440 512 429.25 512 416S501.25 392 488 392ZM320 232H24C10.745 232 0 242.745 0 256V256C0 269.255 10.745 280 24 280H320V232ZM24 440H96V392H24C10.745 392 0 402.745 0 416V416C0 429.255 10.745 440 24 440ZM248 160C261.25 160 272 149.25 272 136V120H488C501.25 120 512 109.25 512 96S501.25 72 488 72H272V56C272 42.75 261.25 32 248 32S224 42.75 224 56V136C224 149.25 234.75 160 248 160Z" />
        </Icon>
    </>
}