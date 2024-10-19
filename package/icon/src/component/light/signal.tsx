
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=light signal}
 * @preview ![signal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRDMjMuMTU2IDM4NCAxNiAzOTEuMTU2IDE2IDQwMFY0OTZDMTYgNTA0Ljg0NCAyMy4xNTYgNTEyIDMyIDUxMlM0OCA1MDQuODQ0IDQ4IDQ5NlY0MDBDNDggMzkxLjE1NiA0MC44NDQgMzg0IDMyIDM4NFpNMTYwIDI4OEMxNTEuMTU2IDI4OCAxNDQgMjk1LjE1NiAxNDQgMzA0VjQ5NkMxNDQgNTA0Ljg0NCAxNTEuMTU2IDUxMiAxNjAgNTEyUzE3NiA1MDQuODQ0IDE3NiA0OTZWMzA0QzE3NiAyOTUuMTU2IDE2OC44NDQgMjg4IDE2MCAyODhaTTI4OCAxOTJDMjc5LjE1NiAxOTIgMjcyIDE5OS4xNTYgMjcyIDIwOFY0OTZDMjcyIDUwNC44NDQgMjc5LjE1NiA1MTIgMjg4IDUxMlMzMDQgNTA0Ljg0NCAzMDQgNDk2VjIwOEMzMDQgMTk5LjE1NiAyOTYuODQ0IDE5MiAyODggMTkyWk00MTYgOTZDNDA3LjE1NiA5NiA0MDAgMTAzLjE1NiA0MDAgMTEyVjQ5NkM0MDAgNTA0Ljg0NCA0MDcuMTU2IDUxMiA0MTYgNTEyUzQzMiA1MDQuODQ0IDQzMiA0OTZWMTEyQzQzMiAxMDMuMTU2IDQyNC44NDQgOTYgNDE2IDk2Wk01NDQgMEM1MzUuMTU2IDAgNTI4IDcuMTU2IDUyOCAxNlY0OTZDNTI4IDUwNC44NDQgNTM1LjE1NiA1MTIgNTQ0IDUxMlM1NjAgNTA0Ljg0NCA1NjAgNDk2VjE2QzU2MCA3LjE1NiA1NTIuODQ0IDAgNTQ0IDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Signal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 384C23.156 384 16 391.156 16 400V496C16 504.844 23.156 512 32 512S48 504.844 48 496V400C48 391.156 40.844 384 32 384ZM160 288C151.156 288 144 295.156 144 304V496C144 504.844 151.156 512 160 512S176 504.844 176 496V304C176 295.156 168.844 288 160 288ZM288 192C279.156 192 272 199.156 272 208V496C272 504.844 279.156 512 288 512S304 504.844 304 496V208C304 199.156 296.844 192 288 192ZM416 96C407.156 96 400 103.156 400 112V496C400 504.844 407.156 512 416 512S432 504.844 432 496V112C432 103.156 424.844 96 416 96ZM544 0C535.156 0 528 7.156 528 16V496C528 504.844 535.156 512 544 512S560 504.844 560 496V16C560 7.156 552.844 0 544 0Z" />
        </Icon>
    </>
}