import { Modal, ModalProps } from '@mantine/core'
import { MyFooter } from '../footer/MyFooter'

export const About: React.FC<ModalProps> = (props) => (
  <Modal title="Tickety" {...props}>
    <Modal.Content>
      <p>
        A simple TODO list app that <b>respect your privacy</b>.
      </p>
      <ul>
        <li>No tracking*</li>
        <li>no ads</li>
        <li>no data selling</li>
      </ul>
      <MyFooter />

      <p>* except from Next.js tracking. This will be soon removed.</p>
    </Modal.Content>
  </Modal>
)

export default About
