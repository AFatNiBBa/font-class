
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-glass?s=sharp-duotone-solid burger-glass}
 * @preview ![burger-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNSA2NCA0MCA1MTJsMjE2IDAgMC0yMjkuNGMzLTkuMSA2LjctMTcuNSAxMS42LTI1LjljNi42LTExLjMgMTctMjUuOSAzMi43LTQwLjRjMTcuMi0xNS45IDQwLjEtMzEgNzAuMS00MS42TDM3OSA2NGw1LTY0TDMxOS44IDAgNjQuMiAwIDAgMHpNNjkuMiA2NGwyNDUuNiAwLTcuNSA5Nkw3Ni43IDE2MCA2OS4yIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQwIDMxOS44bDAtMzJzLTMyLTk2LTE3Ni05NnMtMTc2IDk2LTE3NiA5NmwwIDMyIDM1MiAwem0tMjcyLTY0YTE2IDE2IDAgMSAxIDMyIDAgMTYgMTYgMCAxIDEgLTMyIDB6bTk2LTMyYTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnptNjQgMzJhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHptLTI0MCAxNjBsMzUyIDAgMC02NC0zNTIgMCAwIDY0em0wIDk2bDM1MiAwIDAtNjQtMzUyIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BurgerGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l216 0 0-229.4c3-9.1 6.7-17.5 11.6-25.9c6.6-11.3 17-25.9 32.7-40.4c17.2-15.9 40.1-31 70.1-41.6L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0-7.5 96L76.7 160 69.2 64z" />
            <path d="M640 319.8l0-32s-32-96-176-96s-176 96-176 96l0 32 352 0zm-272-64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm96-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-240 160l352 0 0-64-352 0 0 64zm0 96l352 0 0-64-352 0 0 64z" />
    </Icon>
);

export default BurgerGlass;