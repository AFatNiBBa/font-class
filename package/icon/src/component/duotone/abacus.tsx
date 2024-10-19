
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `abacus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/abacus?s=duotone abacus}
 * @preview ![abacus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAzMzZIMTYwVjMxMkgxMjhWMzM2Wk01MjggMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwVjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDUyOEM1NTQuNTEgNDgwIDU3NiA0NTguNTEgNTc2IDQzMlY4MEM1NzYgNTMuNDkgNTU0LjUxIDMyIDUyOCAzMlpNNTEyIDQxNkg0NDhWMzg0SDQxNlY0MTZIMjg4VjM4NEgyNTZWNDE2SDE2MFYzODRIMTI4VjQxNkg2NFYyNDBIMTI4VjI2NEgxNjBWMjQwSDI1NlYyNjRIMjg4VjI0MEg0MTZWMzM2SDQ0OFYyNDBINTEyVjQxNlpNNTEyIDIwOEg0NDhWMTc2SDQxNlYyMDhIMjg4VjE3NkgyNTZWMjA4SDE2MFYxNzZIMTI4VjIwOEg2NFY5NkgxMjhWMTI4SDE2MFY5NkgyNTZWMTI4SDI4OFY5Nkg0MTZWMTI4SDQ0OFY5Nkg1MTJWMjA4Wk0yNTYgMzM2SDI4OFYzMTJIMjU2VjMzNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc2IDI2NEgxMTJDMTAzLjE2NCAyNjQgOTYgMjcxLjE2NCA5NiAyODBWMjk2Qzk2IDMwNC44MzYgMTAzLjE2NCAzMTIgMTEyIDMxMkgxNzZDMTg0LjgzNiAzMTIgMTkyIDMwNC44MzYgMTkyIDI5NlYyODBDMTkyIDI3MS4xNjQgMTg0LjgzNiAyNjQgMTc2IDI2NFpNMTc2IDEyOEgxMTJDMTAzLjE2NCAxMjggOTYgMTM1LjE2NCA5NiAxNDRWMTYwQzk2IDE2OC44MzYgMTAzLjE2NCAxNzYgMTEyIDE3NkgxNzZDMTg0LjgzNiAxNzYgMTkyIDE2OC44MzYgMTkyIDE2MFYxNDRDMTkyIDEzNS4xNjQgMTg0LjgzNiAxMjggMTc2IDEyOFpNMzA0IDMzNkgyNDBDMjMxLjE2NCAzMzYgMjI0IDM0My4xNjQgMjI0IDM1MlYzNjhDMjI0IDM3Ni44MzYgMjMxLjE2NCAzODQgMjQwIDM4NEgzMDRDMzEyLjgzNiAzODQgMzIwIDM3Ni44MzYgMzIwIDM2OFYzNTJDMzIwIDM0My4xNjQgMzEyLjgzNiAzMzYgMzA0IDMzNlpNMTc2IDMzNkgxMTJDMTAzLjE2NCAzMzYgOTYgMzQzLjE2NCA5NiAzNTJWMzY4Qzk2IDM3Ni44MzYgMTAzLjE2NCAzODQgMTEyIDM4NEgxNzZDMTg0LjgzNiAzODQgMTkyIDM3Ni44MzYgMTkyIDM2OFYzNTJDMTkyIDM0My4xNjQgMTg0LjgzNiAzMzYgMTc2IDMzNlpNNDY0IDEyOEg0MDBDMzkxLjE2NCAxMjggMzg0IDEzNS4xNjQgMzg0IDE0NFYxNjBDMzg0IDE2OC44MzYgMzkxLjE2NCAxNzYgNDAwIDE3Nkg0NjRDNDcyLjgzNiAxNzYgNDgwIDE2OC44MzYgNDgwIDE2MFYxNDRDNDgwIDEzNS4xNjQgNDcyLjgzNiAxMjggNDY0IDEyOFpNMzA0IDI2NEgyNDBDMjMxLjE2NCAyNjQgMjI0IDI3MS4xNjQgMjI0IDI4MFYyOTZDMjI0IDMwNC44MzYgMjMxLjE2NCAzMTIgMjQwIDMxMkgzMDRDMzEyLjgzNiAzMTIgMzIwIDMwNC44MzYgMzIwIDI5NlYyODBDMzIwIDI3MS4xNjQgMzEyLjgzNiAyNjQgMzA0IDI2NFpNNDY0IDMzNkg0MDBDMzkxLjE2NCAzMzYgMzg0IDM0My4xNjQgMzg0IDM1MlYzNjhDMzg0IDM3Ni44MzYgMzkxLjE2NCAzODQgNDAwIDM4NEg0NjRDNDcyLjgzNiAzODQgNDgwIDM3Ni44MzYgNDgwIDM2OFYzNTJDNDgwIDM0My4xNjQgNDcyLjgzNiAzMzYgNDY0IDMzNlpNMzA0IDEyOEgyNDBDMjMxLjE2NCAxMjggMjI0IDEzNS4xNjQgMjI0IDE0NFYxNjBDMjI0IDE2OC44MzYgMjMxLjE2NCAxNzYgMjQwIDE3NkgzMDRDMzEyLjgzNiAxNzYgMzIwIDE2OC44MzYgMzIwIDE2MFYxNDRDMzIwIDEzNS4xNjQgMzEyLjgzNiAxMjggMzA0IDEyOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Abacus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M128 336H160V312H128V336ZM528 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H528C554.51 480 576 458.51 576 432V80C576 53.49 554.51 32 528 32ZM512 416H448V384H416V416H288V384H256V416H160V384H128V416H64V240H128V264H160V240H256V264H288V240H416V336H448V240H512V416ZM512 208H448V176H416V208H288V176H256V208H160V176H128V208H64V96H128V128H160V96H256V128H288V96H416V128H448V96H512V208ZM256 336H288V312H256V336Z" />
            <path d="M176 264H112C103.164 264 96 271.164 96 280V296C96 304.836 103.164 312 112 312H176C184.836 312 192 304.836 192 296V280C192 271.164 184.836 264 176 264ZM176 128H112C103.164 128 96 135.164 96 144V160C96 168.836 103.164 176 112 176H176C184.836 176 192 168.836 192 160V144C192 135.164 184.836 128 176 128ZM304 336H240C231.164 336 224 343.164 224 352V368C224 376.836 231.164 384 240 384H304C312.836 384 320 376.836 320 368V352C320 343.164 312.836 336 304 336ZM176 336H112C103.164 336 96 343.164 96 352V368C96 376.836 103.164 384 112 384H176C184.836 384 192 376.836 192 368V352C192 343.164 184.836 336 176 336ZM464 128H400C391.164 128 384 135.164 384 144V160C384 168.836 391.164 176 400 176H464C472.836 176 480 168.836 480 160V144C480 135.164 472.836 128 464 128ZM304 264H240C231.164 264 224 271.164 224 280V296C224 304.836 231.164 312 240 312H304C312.836 312 320 304.836 320 296V280C320 271.164 312.836 264 304 264ZM464 336H400C391.164 336 384 343.164 384 352V368C384 376.836 391.164 384 400 384H464C472.836 384 480 376.836 480 368V352C480 343.164 472.836 336 464 336ZM304 128H240C231.164 128 224 135.164 224 144V160C224 168.836 231.164 176 240 176H304C312.836 176 320 168.836 320 160V144C320 135.164 312.836 128 304 128Z" />
        </Icon>
    </>
}