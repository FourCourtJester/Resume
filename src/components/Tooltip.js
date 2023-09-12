import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function ToolTip(properties) {
  const { children, id, placement = 'auto', title, trigger = 'hover' } = properties

  return (
    <OverlayTrigger
      trigger={trigger}
      placement={placement}
      overlay={
        <Tooltip id={id} className="text-nowrap">
          {title}
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  )
}

export default ToolTip
