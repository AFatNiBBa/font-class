
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `amp-guitar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/amp-guitar?s=light amp-guitar}
 * @preview ![amp-guitar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzUyQzQyNC44NzUgMzUyIDQzMiAzNDQuODc1IDQzMiAzMzZTNDI0Ljg3NSAzMjAgNDE2IDMyMFM0MDAgMzI3LjEyNSA0MDAgMzM2UzQwNy4xMjUgMzUyIDQxNiAzNTJaTTM1MiAzNTJDMzYwLjg3NSAzNTIgMzY4IDM0NC44NzUgMzY4IDMzNlMzNjAuODc1IDMyMCAzNTIgMzIwUzMzNiAzMjcuMTI1IDMzNiAzMzZTMzQzLjEyNSAzNTIgMzUyIDM1MlpNMzg0IDQwMEMzOTIuODc1IDQwMCA0MDAgMzkyLjg3NSA0MDAgMzg0UzM5Mi44NzUgMzY4IDM4NCAzNjhTMzY4IDM3NS4xMjUgMzY4IDM4NFMzNzUuMTI1IDQwMCAzODQgNDAwWk0yODggMzUyQzI5Ni44NzUgMzUyIDMwNCAzNDQuODc1IDMwNCAzMzZTMjk2Ljg3NSAzMjAgMjg4IDMyMFMyNzIgMzI3LjEyNSAyNzIgMzM2UzI3OS4xMjUgMzUyIDI4OCAzNTJaTTMyMCA0MDBDMzI4Ljg3NSA0MDAgMzM2IDM5Mi44NzUgMzM2IDM4NFMzMjguODc1IDM2OCAzMjAgMzY4UzMwNCAzNzUuMTI1IDMwNCAzODRTMzExLjEyNSA0MDAgMzIwIDQwMFpNMTYwIDQxNkMxNTEuMTI1IDQxNiAxNDQgNDIzLjEyNSAxNDQgNDMyUzE1MS4xMjUgNDQ4IDE2MCA0NDhTMTc2IDQ0MC44NzUgMTc2IDQzMlMxNjguODc1IDQxNiAxNjAgNDE2Wk00MTYgNDE2QzQwNy4xMjUgNDE2IDQwMCA0MjMuMTI1IDQwMCA0MzJTNDA3LjEyNSA0NDggNDE2IDQ0OFM0MzIgNDQwLjg3NSA0MzIgNDMyUzQyNC44NzUgNDE2IDQxNiA0MTZaTTIyNCA0MTZDMjE1LjEyNSA0MTYgMjA4IDQyMy4xMjUgMjA4IDQzMlMyMTUuMTI1IDQ0OCAyMjQgNDQ4UzI0MCA0NDAuODc1IDI0MCA0MzJTMjMyLjg3NSA0MTYgMjI0IDQxNlpNMjU2IDQwMEMyNjQuODc1IDQwMCAyNzIgMzkyLjg3NSAyNzIgMzg0UzI2NC44NzUgMzY4IDI1NiAzNjhTMjQwIDM3NS4xMjUgMjQwIDM4NFMyNDcuMTI1IDQwMCAyNTYgNDAwWk0yODggNDE2QzI3OS4xMjUgNDE2IDI3MiA0MjMuMTI1IDI3MiA0MzJTMjc5LjEyNSA0NDggMjg4IDQ0OFMzMDQgNDQwLjg3NSAzMDQgNDMyUzI5Ni44NzUgNDE2IDI4OCA0MTZaTTM1MiA0MTZDMzQzLjEyNSA0MTYgMzM2IDQyMy4xMjUgMzM2IDQzMlMzNDMuMTI1IDQ0OCAzNTIgNDQ4UzM2OCA0NDAuODc1IDM2OCA0MzJTMzYwLjg3NSA0MTYgMzUyIDQxNlpNMjI0IDM1MkMyMzIuODc1IDM1MiAyNDAgMzQ0Ljg3NSAyNDAgMzM2UzIzMi44NzUgMzIwIDIyNCAzMjBTMjA4IDMyNy4xMjUgMjA4IDMzNlMyMTUuMTI1IDM1MiAyMjQgMzUyWk00NjQgNjRIMzg2Ljc1QzM1Ny44NzUgMzYuMTI1IDMxMC4yNSAwIDI1NiAwUzE1NC4xMjUgMzYuMTI1IDEyNS4yNSA2NEg0OEMyMS41IDY0IDAgODUuNSAwIDExMlY0NjRDMCA0OTAuNSAyMS41IDUxMiA0OCA1MTJINDY0QzQ5MC41IDUxMiA1MTIgNDkwLjUgNTEyIDQ2NFYxMTJDNTEyIDg1LjUgNDkwLjUgNjQgNDY0IDY0Wk0yNTYgMzJDMjg2LjEyNSAzMiAzMTQuNjI1IDQ2Ljg3NSAzMzcuNjI1IDY0SDE3NC4zNzVDMTk3LjM3NSA0Ni44NzUgMjI1Ljg3NSAzMiAyNTYgMzJaTTQ4MCA0NjRDNDgwIDQ3Mi44NzUgNDcyLjg3NSA0ODAgNDY0IDQ4MEg0OEMzOS4xMjUgNDgwIDMyIDQ3Mi44NzUgMzIgNDY0VjI4OEg0ODBWNDY0Wk00ODAgMjU2SDMyVjExMkMzMiAxMDMuMTI1IDM5LjEyNSA5NiA0OCA5Nkg0NjRDNDcyLjg3NSA5NiA0ODAgMTAzLjEyNSA0ODAgMTEyVjI1NlpNOTYgMzUyQzEwNC44NzUgMzUyIDExMiAzNDQuODc1IDExMiAzMzZTMTA0Ljg3NSAzMjAgOTYgMzIwUzgwIDMyNy4xMjUgODAgMzM2Uzg3LjEyNSAzNTIgOTYgMzUyWk05NiA0NDhDMTA0Ljg3NSA0NDggMTEyIDQ0MC44NzUgMTEyIDQzMlMxMDQuODc1IDQxNiA5NiA0MTZTODAgNDIzLjEyNSA4MCA0MzJTODcuMTI1IDQ0OCA5NiA0NDhaTTE2MCAzNTJDMTY4Ljg3NSAzNTIgMTc2IDM0NC44NzUgMTc2IDMzNlMxNjguODc1IDMyMCAxNjAgMzIwUzE0NCAzMjcuMTI1IDE0NCAzMzZTMTUxLjEyNSAzNTIgMTYwIDM1MlpNMTkyIDQwMEMyMDAuODc1IDQwMCAyMDggMzkyLjg3NSAyMDggMzg0UzIwMC44NzUgMzY4IDE5MiAzNjhTMTc2IDM3NS4xMjUgMTc2IDM4NFMxODMuMTI1IDQwMCAxOTIgNDAwWk0xMjggNDAwQzEzNi44NzUgNDAwIDE0NCAzOTIuODc1IDE0NCAzODRTMTM2Ljg3NSAzNjggMTI4IDM2OFMxMTIgMzc1LjEyNSAxMTIgMzg0UzExOS4xMjUgNDAwIDEyOCA0MDBaTTk2IDE1MkM4Mi43NDYgMTUyIDcyIDE2Mi43NDYgNzIgMTc2UzgyLjc0NiAyMDAgOTYgMjAwQzEwOS4yNTYgMjAwIDEyMCAxODkuMjU0IDEyMCAxNzZTMTA5LjI1NiAxNTIgOTYgMTUyWk0xOTIgMTUyQzE3OC43NDYgMTUyIDE2OCAxNjIuNzQ2IDE2OCAxNzZTMTc4Ljc0NiAyMDAgMTkyIDIwMEMyMDUuMjU2IDIwMCAyMTYgMTg5LjI1NCAyMTYgMTc2UzIwNS4yNTYgMTUyIDE5MiAxNTJaTTMyMCAxNTJDMzA2Ljc0NiAxNTIgMjk2IDE2Mi43NDYgMjk2IDE3NlMzMDYuNzQ2IDIwMCAzMjAgMjAwQzMzMy4yNTYgMjAwIDM0NCAxODkuMjU0IDM0NCAxNzZTMzMzLjI1NiAxNTIgMzIwIDE1MlpNNDE2IDE1MkM0MDIuNzQ2IDE1MiAzOTIgMTYyLjc0NiAzOTIgMTc2UzQwMi43NDYgMjAwIDQxNiAyMDBDNDI5LjI1NiAyMDAgNDQwIDE4OS4yNTQgNDQwIDE3NlM0MjkuMjU2IDE1MiA0MTYgMTUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AmpGuitar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 352C424.875 352 432 344.875 432 336S424.875 320 416 320S400 327.125 400 336S407.125 352 416 352ZM352 352C360.875 352 368 344.875 368 336S360.875 320 352 320S336 327.125 336 336S343.125 352 352 352ZM384 400C392.875 400 400 392.875 400 384S392.875 368 384 368S368 375.125 368 384S375.125 400 384 400ZM288 352C296.875 352 304 344.875 304 336S296.875 320 288 320S272 327.125 272 336S279.125 352 288 352ZM320 400C328.875 400 336 392.875 336 384S328.875 368 320 368S304 375.125 304 384S311.125 400 320 400ZM160 416C151.125 416 144 423.125 144 432S151.125 448 160 448S176 440.875 176 432S168.875 416 160 416ZM416 416C407.125 416 400 423.125 400 432S407.125 448 416 448S432 440.875 432 432S424.875 416 416 416ZM224 416C215.125 416 208 423.125 208 432S215.125 448 224 448S240 440.875 240 432S232.875 416 224 416ZM256 400C264.875 400 272 392.875 272 384S264.875 368 256 368S240 375.125 240 384S247.125 400 256 400ZM288 416C279.125 416 272 423.125 272 432S279.125 448 288 448S304 440.875 304 432S296.875 416 288 416ZM352 416C343.125 416 336 423.125 336 432S343.125 448 352 448S368 440.875 368 432S360.875 416 352 416ZM224 352C232.875 352 240 344.875 240 336S232.875 320 224 320S208 327.125 208 336S215.125 352 224 352ZM464 64H386.75C357.875 36.125 310.25 0 256 0S154.125 36.125 125.25 64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H464C490.5 512 512 490.5 512 464V112C512 85.5 490.5 64 464 64ZM256 32C286.125 32 314.625 46.875 337.625 64H174.375C197.375 46.875 225.875 32 256 32ZM480 464C480 472.875 472.875 480 464 480H48C39.125 480 32 472.875 32 464V288H480V464ZM480 256H32V112C32 103.125 39.125 96 48 96H464C472.875 96 480 103.125 480 112V256ZM96 352C104.875 352 112 344.875 112 336S104.875 320 96 320S80 327.125 80 336S87.125 352 96 352ZM96 448C104.875 448 112 440.875 112 432S104.875 416 96 416S80 423.125 80 432S87.125 448 96 448ZM160 352C168.875 352 176 344.875 176 336S168.875 320 160 320S144 327.125 144 336S151.125 352 160 352ZM192 400C200.875 400 208 392.875 208 384S200.875 368 192 368S176 375.125 176 384S183.125 400 192 400ZM128 400C136.875 400 144 392.875 144 384S136.875 368 128 368S112 375.125 112 384S119.125 400 128 400ZM96 152C82.746 152 72 162.746 72 176S82.746 200 96 200C109.256 200 120 189.254 120 176S109.256 152 96 152ZM192 152C178.746 152 168 162.746 168 176S178.746 200 192 200C205.256 200 216 189.254 216 176S205.256 152 192 152ZM320 152C306.746 152 296 162.746 296 176S306.746 200 320 200C333.256 200 344 189.254 344 176S333.256 152 320 152ZM416 152C402.746 152 392 162.746 392 176S402.746 200 416 200C429.256 200 440 189.254 440 176S429.256 152 416 152Z" />
        </Icon>
    </>
}