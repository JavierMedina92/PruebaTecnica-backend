import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Importa TypeOrmModule y registra la entidad Product
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
