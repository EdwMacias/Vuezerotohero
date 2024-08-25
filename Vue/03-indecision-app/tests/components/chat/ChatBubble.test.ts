import { mount } from '@vue/test-utils';
import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('<ChatBubble/>', () => {
  test('render own message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    });
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-200').exists()).toBeFalsy();
  });

  test('render received message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
      },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('img').exists()).toBe(false);
    console.log('no image');
  });
  test('render received message correctly with image', () => {
    const message = 'Hola mundo';
    const image = 'example.jpg';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
        image,
      },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
