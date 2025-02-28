import { Modal, ModalProps, Paper } from '@mantine/core'
import { MyFooter } from '../footer/MyFooter'

export const About: React.FC<ModalProps> = (props) => (
  <Modal title="Tickety" {...props}>
    <Modal.Body>
      <p>
        A simple TODO list app that <b>🥸 respects your privacy</b>.
      </p>
      <ul>
        <li>no tracking*</li>
        <li>no ads</li>
        <li>no data selling</li>
      </ul>

      <p>* except from Next.js tracking. Those will be soon removed.</p>
      <MyFooter />
    </Modal.Body>
  </Modal>
)

export default About
