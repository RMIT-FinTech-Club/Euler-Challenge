export default function Boundary({label}) {
    return (
        <div
        className={clsx('relative rounded-lg border border-dashed p-4 lg:p-9')}
        >
          <div
            className={clsx(
              'absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest left-4 lg:left-9'
            )}
          >
            <div className="rounded-full px-1.5 shadow-[0_0_1px_3px_black]">
                {label}
            </div>
          </div>  
            {children}
        </div>
    )
}