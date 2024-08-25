import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox/>', () => {
  const wrapper = mount(MessageBox);
  const message = 'hello world';
  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emit sendMessage when button is clicked with message value', async () => {
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');
    console.log(wrapper.emitted('sendMessage'));
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('emit sendMessage event when keyPress.enter is triggered and has a message', async () => {
    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('emit sendMessage event when keyPress.enter is triggered and has a message', async () => {
    const wrapper = mount(MessageBox);

    const input = wrapper.find('input');
    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
