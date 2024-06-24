export function Post({ post }) {
  return (
    <a key={post.id} href={post.href} className="group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={post.imageSrc}
          alt={post.imageAlt}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{post.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {post.description}
      </p>
    </a>
  );
}
