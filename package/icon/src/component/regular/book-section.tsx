
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `book-section` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-section?s=regular book-section}
 * @preview ![book-section](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgNDAwQzQzNyA0MDAgNDQ4IDM4OSA0NDggMzc2VjI0QzQ0OCAxMSA0MzcgMCA0MjQgMEg4MEMzNiAwIDAgMzYgMCA4MFY0MzJDMCA0NzYgMzYgNTEyIDgwIDUxMkg0MjRDNDM3IDUxMiA0NDggNTAxIDQ0OCA0ODhTNDM3IDQ2NCA0MjQgNDY0SDQxNlY0MDBINDI0Wk0zNjggNDY0SDgwQzYyIDQ2NCA0OCA0NTAgNDggNDMyUzYyIDQwMCA4MCA0MDBIMzY4VjQ2NFpNNDAwIDM1Mkg4MEM2OSAzNTIgNTggMzU0IDQ4IDM1OVY4MEM0OCA2MiA2MiA0OCA4MCA0OEg0MDBWMzUyWk0yMjkgMjg3QzIxOSAyODYgMjA4IDI4MiAxOTggMjc5TDE5MyAyNzdDMTg0IDI3NCAxNzUgMjc5IDE3MyAyODdDMTcwIDI5NiAxNzUgMzA1IDE4MyAzMDdMMTg4IDMwOUMxOTkgMzEzIDIxMiAzMTcgMjI1IDMxOUMyMzEgMzIwIDIzNyAzMjAgMjQzIDMyMEMyNzggMzIwIDMwMiAzMDUgMzA3IDI3OUMzMTEgMjYwIDMwNCAyNDcgMjkyIDIzOEMzMDAgMjMxIDMwNSAyMjMgMzA3IDIxMkMzMTUgMTY5IDI3MiAxNTggMjQ0IDE1MUwyMzcgMTQ5QzIwNCAxNDEgMjAzIDEzNSAyMDQgMTI3QzIwNyAxMTUgMjI2IDExMCAyNTEgMTEzQzI1OSAxMTQgMjY4IDExNyAyNzQgMTE5QzI4MyAxMjEgMjkyIDExNyAyOTQgMTA4QzI5NyAxMDAgMjkyIDkxIDI4NCA4OEMyNzIgODUgMjYzIDgyIDI1NiA4MUMyMTEgNzUgMTc5IDkxIDE3MyAxMjFDMTY5IDE0MSAxNzcgMTUzIDE4OCAxNjJDMTgwIDE2OSAxNzUgMTc3IDE3MyAxODhDMTY1IDIzMCAyMDggMjQyIDIyOSAyNDdMMjM2IDI0OUMyNzIgMjU4IDI3OCAyNjMgMjc2IDI3M0MyNzMgMjg1IDI1NCAyOTAgMjI5IDI4N1pNMjc2IDIwNkMyNzQgMjE2IDI2MSAyMTkgMjUzIDIyMEMyNTAgMjIwIDI0NyAyMTkgMjQ0IDIxOEwyMzcgMjE2QzIwNCAyMDcgMjAzIDIwMiAyMDQgMTk0QzIwNiAxODQgMjE5IDE4MSAyMjcgMTgwQzIyNyAxODAgMjI4IDE4MCAyMjkgMTgwTDIzNiAxODJDMjcyIDE5MSAyNzggMTk2IDI3NiAyMDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BookSection(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 400C437 400 448 389 448 376V24C448 11 437 0 424 0H80C36 0 0 36 0 80V432C0 476 36 512 80 512H424C437 512 448 501 448 488S437 464 424 464H416V400H424ZM368 464H80C62 464 48 450 48 432S62 400 80 400H368V464ZM400 352H80C69 352 58 354 48 359V80C48 62 62 48 80 48H400V352ZM229 287C219 286 208 282 198 279L193 277C184 274 175 279 173 287C170 296 175 305 183 307L188 309C199 313 212 317 225 319C231 320 237 320 243 320C278 320 302 305 307 279C311 260 304 247 292 238C300 231 305 223 307 212C315 169 272 158 244 151L237 149C204 141 203 135 204 127C207 115 226 110 251 113C259 114 268 117 274 119C283 121 292 117 294 108C297 100 292 91 284 88C272 85 263 82 256 81C211 75 179 91 173 121C169 141 177 153 188 162C180 169 175 177 173 188C165 230 208 242 229 247L236 249C272 258 278 263 276 273C273 285 254 290 229 287ZM276 206C274 216 261 219 253 220C250 220 247 219 244 218L237 216C204 207 203 202 204 194C206 184 219 181 227 180C227 180 228 180 229 180L236 182C272 191 278 196 276 206Z" />
        </Icon>
    </>
}